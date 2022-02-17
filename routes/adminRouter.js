const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const nodeMailGun = require("nodemailer-mailgun-transport");

const AdminRouter = express.Router();
const { requireAuth2, requireAuth } = require("../middleware/authentication");
const Customer = require("../model/customers");
const WithdrawalRequest = require("../model/withdrawRequest");

const path = require("path");

// Test
function sendMailTo(customer, res, successResponse, walletAddress, amount) {
  console.log("My Path ===>", __dirname);
  const auth = {
    auth: {
      api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
      domain: "litestudios.com.ng",
    },
  };

  const transporter = nodemailer.createTransport(nodeMailGun(auth));

  ejs
    .renderFile(path.join(__dirname, "..", "mail", "withdraw-approval.ejs"), {
      client: customer,
      walletAddress,
      amount,
    })
    .then((data) => {
      console.log("Rendering the EJS with this Mail", customer.email);
      const mailOptions = {
        from: "support@wealthwisefx.co.uk",
        to: customer.email,
        subject: "Withdrawal Request Successful",
        html: data,
      };

      transporter
        .sendMail(mailOptions)
        .then((success) => {
          console.log("MESSAGE SENT!!!");
          res.json(successResponse);
        })
        .catch((err) => {
          console.log("ERROR SENDING MAIL OCCURED!!! =========>", err);
          res.json({ msg: "error sending mail!" });
        });
    })
    .catch((error) =>
      console.log("ERROR CANNOT RENDER EJS TEMPLATE!!!============>", error)
    );
}
// Test


// Route Authentication Func.
AdminRouter.use( requireAuth2 );



AdminRouter.get("/customer/:id", async (req, res) => {
  const userId = req.params.id;
  console.log('The customer unique ID', userId)
    
  // If no Customer ID from
  // client-side take client to "/login"
    if (!userId) {
      res.json({redirect: '/login'})
    } else {
      console.log("Fetching One User's info From Admin router!  ID ---", userId)

      const price = require('crypto-price')
      let btc, eth, ltc, bch
      // try {
      //   btc = await price.getCryptoPrice("USD", "BTC")
      //   eth = await price.getCryptoPrice("USD", "ETH")
      //   ltc = await price.getCryptoPrice("USD", "LTC")
      //   bch = await price.getCryptoPrice("USD", "BCH")
      // }
      // catch (e) {
      //   console.log("ERR thrown in fetching crypto Prices. "+ __dirname +"==+==>", e)
      // }
      

      // Add to the customer object response
     const crypto = null /* { btc, eth, ltc, bch } */

      try {
          let customer = await Customer.findById(userId).select("-password");
          customer && res.json({ customer, crypto: !crypto ? null : crypto });
      } catch (error) {
          console.log("Cant Find User!! ---", error)
      }
    }
})

AdminRouter.get("/all-customers", async (req, res) => {
  // res.json({msg: "Response from admin route!!!"})

  try {
    const customers = await Customer.find().select("-password");
    customers && res.json(customers);
  } catch (error) {
    console.log("ERR! Getting Customers from Database!", error);
    error && res.json(error);
  }
});

AdminRouter.post("/all-customers", async (req, res) => {
  console.log(req.body);

  const { searchQuery, amount, depositCondition } = req.body;

  // Change the Data type of Amount from String to Number!
  const amountN = Number(amount);

  if (depositCondition === "add") {
    try {
      const customer = await Customer.findOne({ email: searchQuery }).select(
        "-password"
      );
      if (customer) {
        const previous_wallet_amount = customer.wallet;
        const customerId = customer._id;

        const customerDocument = await Customer.findByIdAndUpdate(
          customerId,
          {
            wallet: previous_wallet_amount + amountN,
            isTradeOn: true
          },
          { new: true }
        );

        if (customerDocument) {
          const customer = await Customer.findOneAndUpdate(
            { email: searchQuery },
            {
              $push: { deposit: amountN },
            },
            { new: true }
          );

          // customer && console.log("Customer With Transaction details ==>", customer)
          customer && res.json({ msg: "Wallet Updated!" });
        }
      }
    } catch (error) {
      console.log("ERR! Cannot Find And update Wallet Amount  ==> ", error);
    }
  } else if (depositCondition === "topUp") {
    try {
      const customer = await Customer.findOne({ email: searchQuery }).select(
        "-password"
      );
      if (customer) {
        const previous_wallet_amount = customer.wallet;
        const customerId = customer._id;

        const customerDocument = await Customer.findByIdAndUpdate(
          customerId,
          {
            wallet: previous_wallet_amount + amountN,
          },
          { new: true }
        );

        if (customerDocument) {
          // customer && console.log("Customer With Transaction details ==>", customer)
          customer && res.json({ msg: "Wallet Updated!" });
        }
      }
    } catch (error) {
      console.log("ERR! Cannot Find And update Wallet Amount  ==> ", error);
    }
  } else if (depositCondition === "subtract") {
    try {
      const customer = await Customer.findOne({ email: searchQuery }).select(
        "-password"
      );
      if (customer) {
        const previous_wallet_amount = customer.wallet;
        const customerId = customer._id;

        const customerDocument = await Customer.findByIdAndUpdate(
          customerId,
          {
            wallet: previous_wallet_amount - amountN,
          },
          { new: true }
        );

        customerDocument && res.json({ msg: "Wallet Updated!" });
      }
    } catch (error) {
      console.log("ERR! Cannot Find And update Wallet Amount  ==> ", error);
    }
  }
});

// Update Bonus Here!

AdminRouter.post("/bonus", async (req, res) => {
  console.log(req.body);

  const { searchQuery, amount, depositCondition } = req.body;

  // Change the Data type of Amount from String to Number!
  const amountN = Number(amount);

  if (depositCondition === "add") {
    try {
      const customer = await Customer.findOne({ email: searchQuery }).select(
        "-password"
      );
      if (customer) {
        const previous_bonus_amount = customer.bonus;
        const customerId = customer._id;

        const customerDocument = await Customer.findByIdAndUpdate(
          customerId,
          {
            bonus: previous_bonus_amount + amountN,
          },
          { new: true }
        );

        if (customerDocument) {
          // customer && console.log("Customer With Transaction details ==>", customer)
          customer && res.json({ msg: "Wallet Updated!" });
        }
      }
    } catch (error) {
      console.log("ERR! Cannot Find And update Wallet Amount  ==> ", error);
    }
  } else if (depositCondition === "subtract") {
    try {
      const customer = await Customer.findOne({ email: searchQuery }).select(
        "-password"
      );
      if (customer) {
        const previous_bonus_amount = customer.bonus;
        const customerId = customer._id;

        const customerDocument = await Customer.findByIdAndUpdate(
          customerId,
          {
            bonus: previous_bonus_amount - amountN,
          },
          { new: true }
        );

        customerDocument && res.json({ msg: "Wallet Updated!" });
      }
    } catch (error) {
      console.log("ERR! Cannot Find And update Wallet Amount  ==> ", error);
    }
  }
});

AdminRouter.post("/customer", async (req, res) => {
  console.log(typeof req.body);

  const { searchQuery } = req.body;
  console.log(typeof searchQuery);

  try {
    const customer = await Customer.findOne({ email: searchQuery }).select(
      "-password"
    );
    customer && res.json(customer);
  } catch (error) {
    console.log("ERR! finding one customer in DB! ==>", error);
    error && res.json(error);
  }
});

AdminRouter.delete("/customer/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    deletedCustomer && console.log("The DELETED User! ==>", deletedCustomer);
    deletedCustomer && res.json({ msg: "Delete Success!" });
  } catch (error) {
    console.log("ERR! trying To delete A user in DB! ==>", error);
  }
});

AdminRouter.get("/request", async (req, res) => {
  try {
    const withdrawal_request = await WithdrawalRequest.find();
    withdrawal_request && res.json(withdrawal_request);
  } catch (error) {
    console.log("ERR! Getting withdraw Request from DB! ==>", error);
    error && res.json(error);
  }
});

AdminRouter.delete("/request/:id", async (req, res) => {
  console.log("The ID to be DEleted!!! ==>", req.params.id);

  const id = req.params.id;

  if (id !== undefined) {
    try {
      const requestDocument = await WithdrawalRequest.findByIdAndDelete(id);
      requestDocument && res.json(requestDocument);
    } catch (error) {
      console.log("ERR! cannot delete Withdrawal Request ==>", error);
    }
  }
});

AdminRouter.post("/request", async (req, res) => {
  console.log("POST withdraw Request ==>", req.body);

  const { email, amount, walletAddress, crypto_type } = req.body;

  try {
    const result = await WithdrawalRequest.create(req.body);
    result && res.json(result);

    if (result) {
      Customer.findOneAndUpdate(
        { email: email },
        {
          status: `Your withdrawal request of $${amount} has been logged into the system and is being processed at the moment!`,
          isTradeOn: false
        }
      ).then(result);
    }
  } catch (error) {
    console.log("ERR! Posting WITHDRAW REQUEST!!! ==> ", error);
    error && res.json(error);
  }
});

AdminRouter.post("/request/approval", async (req, res) => {
  console.log("The request for Withdraw Approval --->>> ", req.body);

  const { amount, email, walletAddress } = req.body;

  try {
    const customer = await Customer.findOneAndUpdate(
      { email: email },
      {
        $push: { payouts: amount },
      },
      { new: true }
    );

    // customer && console.log("Customer With Transaction details ==>", customer)

    if (customer) {
      Customer.findOneAndUpdate(
        { email: email },
        {
          status: "",
        }
      ).then((result) => {
        // console.log("Updated Withdraw Status ==>>", result)
        // res.json(result);

        sendMailTo(customer, res, result, walletAddress, amount);
      });
    }
  } catch (error) {
    console.log("ERR! Approving WIthdraw Request ==> ", error);
    error && res.json(error);
  }
});

module.exports = AdminRouter;
