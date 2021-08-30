const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const customerSchema = new schema({
  plan: String,
  status: {
    type: String,
    default: "",
  },
  key: {
    type: String,
    default: null,
  },
  isTradeOn: {
    type: Boolean,
    default: false,
  },
  lastDeposit: {
    type: Number,
    default: 0,
  },
  lastLogin: String,
  tradingDay: {
    type: Number,
    default: 0
  },
  isbotOn: { type: Boolean, default: false },
  role: {
    type: String,
    default: "customer",
  },
  image: String,
  wallet: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    lowercase: true
  },
  name: {
    type: String,
    lowercase: true,
    required: [true, "Please enter your names"],
  },
  lastname: {
    type: String,
    lowercase: true,
  },
  username: {
    type: String,
    unique: { required: true },
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    lowercase: true,
    unique: { required: true },
    required: [true, "Please enter your email!"],
    validate: [isEmail, "Please enter a valid email address!"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password!"],
    minlength: [6, "Minimun password length is 6 characters"],
  },
  date: {
    type: String,
    default: Date,
  },
  referral: {
    type: Number,
    default: 0,
  },
  bonus: {
    type: Number,
    default: 0,
  },
  payouts: [Number],
  deposit: [Number],
  transcations: Array,
  //   role: 'basic'
});

customerSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

customerSchema.statics.login = async function (email, password) {
  let verifiedUser = {
    _id: null,
    date: null,
    role: null,
    status: null,
    wallet: null,
    email: null,
    name: null,
    lastname: null,
    plan: null,
    bonus: null,
    payouts: null,
    deposit: null,
    referral: null,
    username: null,
    lastDeposit: null
  };
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("This email is not registered");
  } else {
    const authenticated = await bcrypt.compare(password, user.password);
    if (!authenticated) {
      throw new Error("Unauthorized incorrect password credential!");
    } else {
      verifiedUser._id = user._id;
      verifiedUser.date = user.date;
      verifiedUser.role = user.role;
      verifiedUser.status = user.status;
      verifiedUser.wallet = user.wallet;
      verifiedUser.email = user.email;
      verifiedUser.name = user.name;
      verifiedUser.lastname = user.lastname;
      verifiedUser.plan = user.plan;
      verifiedUser.bonus = user.bonus;
      verifiedUser.payouts = user.payouts;
      verifiedUser.deposit = user.deposit;
      verifiedUser.referral = user.referral;
      verifiedUser.username = user.username;
      verifiedUser.lastDeposit = user.lastDeposit;

      return verifiedUser;
    }
  }
};

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
