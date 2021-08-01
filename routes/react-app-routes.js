const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const Customer = require("../model/customers");

const router = express.Router();


// Middle ware;
router.use(express.static("client/tradix/build"));

const maxAge = 2 * 60 * 60;

// Craete Token here!
const createToken = (id) => {
  return jwt.sign({ id }, "mysecret", { expiresIn: maxAge });
};

// Error Handling
const handleErrors = (error) => {
  let refErrors = {
    email: "",
    password: "",
  };

  if (error.code === 11000) {
    refErrors.email = "This email is already registered!";
  }

  if (error.message.includes("Customer validation failed")) {
    // log(Object.values(error.errors))
    Object.values(error.errors).forEach(({ properties }) => {
      refErrors[properties.path] = properties.message;
    });
  }
  return refErrors;
};




// WEB ROUTE!
router.get("/", (req, res) => {
  console.log("req just came in to load up React client/Build files ");
  res.sendFile(
    path.resolve(
      __dirname,
      "..",
      "client",
      "tradix",
      "build",
      "index.html"
    )
  );
});


router.get("/portal", (req, res) => {
  
  console.log(
    "Portal --- req just came in to load up React client/browser-router/Build files "
  );
  res.sendFile(
    path.resolve(
      __dirname,
      "..",
      "client",
      "browser-router",
      "build",
      "index.html"
    )
  );
  // res.send('router.get route')
});

// ROUTE TO load up A
// SignUp Page
// On the React front-end
router.get("/referral", (req, res) => {
  console.log("req just came in to load up React client/Build files ");
  res.sendFile(
    path.resolve(
      __dirname,
      "..",
      "client",
      "signup.html"
    )
  );
});

// SignUp Route
router.get("/signup", (req, res) => {
  // console.log("req just came in to load up React client/Build files ");
  res.sendFile(
    path.resolve(
      __dirname,
      "..",
      "client",
      "tradix",
      "build",
      "index.html"
    )
  );
});

router.post("/referral/:id", async (req, res) => {
  // The Old User's Referral Id Here!
  const UrlUserId = req.params.id;


  if (UrlUserId) {
    try {
      const customer = await Customer.create(req.body);
      if (customer) {
        // NOTE: ALl this below is STARTed / done, when a new Person/Customer is created!
        // NOTE: I am finding the old customer Twice here!
        // NOTE: Second Finding is to Update The Referral Field,
        // find The Old Customer First!
        const old_customer_doc = await Customer.findById(old_user_id);

        // Grab The Previous Referral Field
        // &
        // Update
        // The new Referral Here!
        const previousReferral = old_customer_doc.referral;

        // Now Update The Referral Field Here!
        const old_customer = await Customer.findByIdAndUpdate(
          old_user_id,
          {
            referral: previousReferral + 1,
          },
          { new: true }
        );
      }
      const token = createToken(customer._id);
      customer &&
        res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
      customer && res.status(200).json({ customer });
    } catch (err) {
      const error = handleErrors(err);
      // console.log('Err Occured! ====', err)
      res.json({ error });
      console.log("Err Occured! ====", err);
    }
  } else {
    try {
      const customer = await Customer.create(req.body);
      customer && console.log(customer);
      const token = createToken(customer._id);
      customer &&
        res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
      customer && res.status(200).json({ customer });
    } catch (err) {
      const error = handleErrors(err);
      // console.log('Err Occured! ====', err)
      res.json({ error });
      console.log("Err Occured! ====", error);
    }
  }
});

module.exports = router;
