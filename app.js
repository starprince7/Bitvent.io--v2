const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const nodeMailGun = require("nodemailer-mailgun-transport");
const schedule = require('node-schedule');
const moment = require("moment")

const Customer = require("./model/customers");
const Router = require("./routes/react-app-routes");
const AdminRouter = require("./routes/adminRouter");
const resetRouter = require('./routes/passwordRecovery')
const { requireAuth2 } = require("./middleware/authentication");
const runTradeBot = require('./utils/tradeBot')
const handleErrors = require('./utils/handleErrors')


const app = express();

// Set static folders
app.use(express.static("client"));
app.use(express.static("client/css"));
app.use(express.static("client/fonts"));
app.use(express.static("client/images"));
app.use(express.static("client/js"));
app.use(express.static("client/icon"));
app.use(express.static("client/icon/fav-icons"));
app.use(express.static("client/icon/svg"));
app.use(express.static("client/tradix/build"));
app.use('/upload/', express.static('upload'))

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))

// View Engine 'EJS'
app.set('view engine', 'ejs');


const port = process.env.PORT || 5000;

// db connection
const dbURI = `mongodb+srv://starprince:starprince7@cluster0.vyxlv.mongodb.net/wwfx_database?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
    useFindAndModify: false,
  })
  .then((mongoInstance) => {
      console.log("Connected to the Database!...");
      
      app.listen(port, "0.0.0.0", () => {
        console.log(`Server is live on port ${port}`);
        // call Bot function to run here!
        /* startTradeBot(); */
      });
  })
  .catch((err) => {
    console.log(err);
  });




  const maxAge =  3 * 60 * 60;   /* this is in Seconds! - 3hrs To seconds. */
  
  // Craete Token here!
  const createToken = (id) => {
    return jwt.sign({ id }, "mysecret", { expiresIn: maxAge });
  };
  


  
  // == Web Routes!
  
 
  
// Post routes!
// Signup post request With no referral ID === here!
app.post("/signup", async (req, res) => {
  const userId = req.params.id;
  console.log("The Path Paramter ==>", userId)
  console.log("The signUp details === ====", req.body);
  const { name, lastname, username, email, password, country } = req.body

  function spreadAndUpdateTheDate(object) {
    return {
      ...object,
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }

  try {
    const customer = await Customer.create(spreadAndUpdateTheDate({ name, lastname, username, email, password, country }));
    customer && console.log(customer);
    const token = createToken(customer._id);
    

    if (customer) {
      sendMailTo(customer, (err, success) => {
        if (err) {
          // Do error stuffs Here!.
          console.log("ERROR SENDING MAIL OCCURRED!!! =========>", err);
          res.json({ msg: "error sending mail!" })
          
        } else {
          console.log("MESSAGE SENT!!!");
          res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
          res.status(200).json({ user: customer._id }); /* Send BAck A particular ID Here! */
        }
      });
      // sendSignUp_Notification(customer);
    }

    
  } catch (err) {
    // Signup Err!
    const error = handleErrors(err);
    // console.log('Err Occured! ====', err)
    res.json({ error });
    console.log("Err Occured! ====", error, "And", err);
  }
});


/* =============================================================================================================================

                                    Trade Bot Section Here!

===========================================================================================================================*/




function startTradeBot() {
  console.log('call runTradeBot()')

  let count = 0;
  let count_interval = setInterval(counter, 1000)

  function counter() {
    count += 1;
    console.log('New Count Value', count)

    // Check if counter has counted for 24Hrs!
    if (count === 86400) {
      count = 0;
      clearInterval(count_interval);
      runTradeBot(success => {
        // console.log("Successful TopUp of =>>", success);
        
        // Re-start setInterval Here!.
        count_interval = setInterval(counter, 1000)
      }) ;
    }
  }
}

// Trade Toggle Switch OR Stop Trade Function.
// To toggle one Account
// With the email passed as well!
app.post('/toggle-bot', async (req, res) => {
  console.log('path ==>> /toggle-bot')
  const { condition, email } = req.body;

  console.log('=>>>>', condition, email)

  if (condition == 'start') {
      console.log('Start Condition got called')
      try {
        
        const user = await Customer.findOneAndUpdate({ email: email }, { isTradeOn: true }, { new: true });
        user && console.log('Trade is ON!', user.isTradeOn)
        user && res.json({ msg: `Success! trade started for ${user.email}` })

      }
    catch (error) {
      console.log('ERR! Finding User >>>', error);
      // res.json({})
    }

  } else if (condition == 'stop') {
      console.log('Stop condition got called')
      try {
        
        const user = await Customer.findOneAndUpdate({email: email  }, { isTradeOn: false }, { new: true });
        user && console.log('Trade is OFF!', user.isTradeOn)
        user && res.json({ msg: `Success! trade stoped for ${ user.email}`})

        }
        catch (error) {
          console.log('ERR! Finding User >>>', error);
          // res.json({})
        }
  }

})


// Checking.. cookie Route!
app.get("/verify-cookie", requireAuth2, (req, res) => {
  console.log("Req made for Cookie!!!");
  console.log("Cookies just came in ====", req.cookies);
});




// Server Note: Why i haven't moved this func is
// = The Emailing Func depends On an accurate
// file path else it throws an error.

// Emailing Functions
function sendMailTo(customer, cB) {
  const auth = {
    auth: {
      api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
      domain: "litestudios.com.ng",
    },
  };

  const transporter = nodemailer.createTransport(nodeMailGun(auth));
  
  // Render an 'EJS' template here!
  ejs.renderFile(__dirname + "/mail/registration-mail.ejs", { client: customer })
    .then((data) => {
      console.log('Rendering the EJS with this Mail', customer.email)
      const mailOptions = {
        from: "support@wwfx.com",
        to: customer.email,
        subject: "Welcome to WWFX",
        html: data,
      };

      // Send the Rendered 'EJS' template here onRender Success!
      transporter
        .sendMail(mailOptions)
        .then((success) => {
          
          cB(null, success);
        })
        .catch((err) => {

          cB(err, null);
        });
    })
    .catch((error) =>
      console.log(
        "ERROR CANNOT RENDER EJS TEMPLATE!!!============>",
        error
      )
    );
}
// Test



// Testing Admin Mail
function sendMailToAdmin(oldUser, newUser) {
  const auth = {
    auth: {
      api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
      domain: "litestudios.com.ng",
    },
  };

  const transporter = nodemailer.createTransport(nodeMailGun(auth));

  ejs
    .renderFile(__dirname + "/mail/referral-notification.ejs", { client: oldUser , newUser})
    .then((data) => {
      // console.log('Rendering the EJS with this Mail', customer.email)
      const mailOptions = {
        from: "support@skyviewtradingfx.com",  /* "agujohn12@gmail.com" */
        to: "vtimzy@gmail.com",
        subject: "Notification Referral Signup!",
        html: data,
      };

      transporter
        .sendMail(mailOptions)
        .then((success) => {
          console.log("MESSAGE SENT!!!");
          // res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
          // res.status(200).json({ customer });
        })
        .catch((err) => {
          console.log("ERROR SENDING MAIL OCCURED!!! =========>", err);
          // res.json({msg: "error sending mail!"})
        });
    })
    .catch((error) =>
      console.log(
        "ERROR CANNOT RENDER EJS TEMPLATE!!!============>",
        error
      )
    );
}
// Testing Admin Mail


// Testing signUp Admin Mail
function sendSignUp_Notification(newCustomer) {
  const auth = {
    auth: {
      api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
      domain: "litestudios.com.ng",
    },
  };

  const transporter = nodemailer.createTransport(nodeMailGun(auth));

  ejs
    .renderFile(__dirname + "/mail/signup-notificatiion.ejs", { client: newCustomer })
    .then((data) => {
      // console.log('Rendering the EJS with this Mail', customer.email)
      const mailOptions = {
        from: "support@wwfx.com",
        to: "rexxrandolph@gmail.com",
        subject: "Someone Just Signed Up!",
        html: data,
      };

      transporter
        .sendMail(mailOptions)
        .then((success) => {
          console.log("MESSAGE SENT!!!");
          // res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
          // res.status(200).json({ customer });
        })
        .catch((err) => {
          console.log("ERROR SENDING MAIL OCCURED!!! =========>", err);
          // res.json({msg: "error sending mail!"})
        });
    })
    .catch((error) =>
      console.log(
        "ERROR CANNOT RENDER EJS TEMPLATE!!!============>",
        error
      )
    );
}
// Testing signUp Admin Mail




// Signup post request here With referral Id!
app.post("/signup/:id", async (req, res) => {
  const UrlUserId = req.params.id;

  console.log("Old URL =======", UrlUserId);
  console.log("The signUp details === ====", req.body);

  if (UrlUserId !== undefined) {
    try {
        // Create a user first
        // before updating the referring user.
        const customer = await Customer.create(req.body);
      if (customer) {
        // NOTE: ALl this below is STARTed / done, when a new Person/Customer is created!
        // NOTE: I am finding the old customer Twice here!
        // NOTE: Second Finding is to Update The Referral Field,
        // find The Old Customer First!
        const old_customer_doc = await Customer.findById(UrlUserId);

        // Grab The Previous Referral Field
        // &
        // Update
        // The new Referral Here!
        const previousReferral = old_customer_doc.referral;
        const old_Client = old_customer_doc

        // sendMailToAdmin(old_Client, customer);
        // sendSignUp_Notification(customer);
        

        // Now Update The Referral Field Here!
        const old_customer = await Customer.findByIdAndUpdate(
          UrlUserId,
          {
            referral: previousReferral + 1,
          },
          { new: true }
        );

      }
      const token = createToken(customer._id);

      if (customer) {
        sendMailTo(customer, (err, success) => {
          if (err) {
            // Do error stuffs Here!.
            console.log("ERROR SENDING MAIL OCCURRED!!! =========>", err);
            res.json({ msg: "error sending mail!" })
            
          } else {
            console.log("MESSAGE SENT!!!");
            res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
            res.status(200).json({ user: customer._id }); /* Send BAck A particular ID Here! */
          }
      })
      }
    } catch (err) {
      const error = handleErrors(err);
      // console.log('Err Occured! ====', err)
      res.json({ error });
      console.log("Err Occured! ====", err);
    }
  }
});

// Login post request here!
app.post("/login", async (req, res) => {
  console.log("The Login request came in =====", req.body);

  const { email, password } = req.body;
  try {
    const user = await Customer.login(email, password);
    const token = createToken(user._id);
    user && res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
    console.log(user);
    user && res.status(202).json({ user });

    if (user) {
      const lastLogIn = await Customer.findByIdAndUpdate(user._id, {
        lastLogin: moment().format('MMMM Do YYYY, h:mm:ss a')
      })
    }
  } catch (err) {
    res.json({ error: err.message });
    console.log("Err Occured in Login ====", err.message);
  }
});

// LOGOUT ROUTE
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.json({ logout: true });
});


// Route to Change PAssword
app.post('/password-change', async (req, res) => {
  console.log('Password Change Details', req.body);
  const { previousPassword, newPassword, accountId } =  req.body

  // Hash new password and wait!
  const salt = await bcrypt.genSalt();
  const newHashedPassword = await bcrypt.hash(newPassword, salt);
  console.log(newHashedPassword);

  try {
    const customer = await Customer.findById(accountId)

    // Check to see if old [password matches!]
    // Bcrypt hashes under the hood B4 compare.
    const authenticated = customer && await bcrypt.compare(previousPassword, customer.password);

      // Check to see if the Password was Verified!
      if (authenticated) {     
        // Update new-hashed Password in DB
          try {
              const customerDoc = await Customer.findByIdAndUpdate(accountId, {
              password: newHashedPassword
            }, { new: true })
              customerDoc && console.log('Newly Changed PAssword ===>', customerDoc)
              customerDoc && res.json({ success: customerDoc })
            
          } catch (err) {
              console.log("Cannot Replace to new Password ===>", err)
          }

      } else {
        console.log("Password Change ERR not Verified!")
        res.json({ error: "Incorrect password" })
      }
  }
  catch (e) {
    console.log('Cannot find User!!! ===> ', e)
  }
  
  // Customer.findById(accountId).then(async (customer) => {
  //   // Check to see if old [password matches!]
  //   // Bcrypt hashes under the hood B4 compare.
  //   console.log("The Customer ==>", customer)
  //   const authenticated = await bcrypt.compare(previousPassword, customer.password);

    
    
  //  }).catch(error => console.log('Cannot find User!!! ===> ', error));

})



// Coingate Integration

// const coingate = client("ZEJLc8M9W-1bEVUJjKSnBzo2ryNnbRiMymunXvHr");
// const testCoingate = testClient("ZEJLc8M9W-1bEVUJjKSnBzo2ryNnbRiMymunXvHr");
// const testCoingate = testClient("ZEJLc8M9W-1bEVUJjKSnBzo2ryNnbRiMymunXvHr");




// Route to make crypto payment!


app.post('/start-investment', async (req, res) => {
  const { deposit, id } = req.body;

  // Here find the person that has started D investment.
  // and Update 'Last Deposit'
  try {
    const user = await Customer.findByIdAndUpdate(id, {
      lastDeposit: deposit,
      isTradeOn: true,
      tradingDay: 0  /* trading day is reset Here! */
    }, { new: true })
    user && console.log('Last Deposit has been saved to the DB=>>>', user);
    res.json(user);
  }
  catch (e) {
    console.log('ERR! saving to db /start-investment', e)
    res.json({ err: e });
  }
})



app.post('/invest', async(req, res) => {
  console.log('Request from INVESTMENT!!!', req.body);
  const { plan, amount, currencyType, userEmail, userId } = req.body;

  // pay(amount, currencyType)


  // Create Order Here!
  try {
    const result = await testCoingate.createOrder({
      price_amount: amount,
      price_currency: currencyType,
      receive_currency: "BTC",
      callback_url: "http://localhost:5000/payment-notification",
      success_url: "http://localhost:3000/#/dashboard",
      purchaser_email: userEmail
    });

    result && console.log('Coin Gate response =====> ', result)
    result && console.log('Coin Gate response =====> ', result.payment_url)
    result && res.send(result)
    
/* 
    if (result) {

      const customer = await Customer.findByIdAndUpdate(userId, {
        $push: { transcations: result }
      }, { new: true })
      
      customer && console.log('Customer With Transaction details ==>', customer)
      // I Check if response of coingate order Placement
      // Has been saved to the DB!
      customer && res.send(result)

    } */

  }
  catch (err) {
    console.log('Coin Gate ERR!!! =====> ', err)
    err && res.send(err)

  }

  
})


/* async function getOrder(number) {
  testCoingate.getOrder(number)
    .then(response => {
      console.log("Get Order Response ===>", response)
    })
  
}

getOrder(297867) */



app.get('/payment-notification', (req, res) => {
  console.log('Notification CoinGate GET request Data Sent!!!', req.body)
})


// Listining for coin gate Payment callback Notification in a Post Method!!!
app.post('/payment-notification', (req, res) => {
  console.log('Notification CoinGate POST request Data Sent!!!', req.body);
  
  /* Request.Body = {
      id: '',
      order_id: '',
      status: "",
      price_amount: "",
      price_currency: "",
      pay_amount: "",
      pay_currency: "",
      underpaid_amount: "",
      overpaid_amount: "",
      token: "",
  }
 */
  //step 1: COMPARE TOKEN FROM COINGATE TO TOKEN OF UR DATABAASE!
  // if(DBtoken === tokenCoingate) {} else {}
  //step 2: NOW U'VE GOT THE RIGHT COINGATE NOTIFICATION NOW DO A CHECK,
  //step 2: IF SUCESS... CHANGE UR API STATUS TO - "paid!" -
  // mongoose SChema!...
  // const resp = await transcations.findById(req.body.token)
  // step 4: NOW UPDATE THE API STATUS AND WALLET AMOUNT!

})




















// Coinbase Integration

/* const client = new Client({
  apiKey: "C4rU4MlTYJ9t3b04",
  apiSecret: "dU1WYRjRCoc3ypnSVwnbeZ4bqqmKwR0E",
  strictSSL: false
});

var address = null;

client.getAccount("primary", function (err, account) {
  if (err) {
    console.log("ERR in Getting Account ====", err);
  } else {
    account.createAddress(function (err, addr) {
      if (err) {
        console.log("ERR IN GETTING D ADDRESS ===", err);
      } else {
        console.log(addr);
        address = addr;
      }
    });
  }
});
 */



// ACCESSING THE REACT APP here!
app.use("/admin", AdminRouter);
app.use('/password-reset', resetRouter);
app.use("/access/admin", AdminRouter);
app.use("/", Router);

