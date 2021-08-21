const path = require('path');
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const nodeMailGun = require("nodemailer-mailgun-transport");


// Test
function sendMailToCustomer(email, data, cb) {
    let messageSent = false;

    console.log("My Path ===>", __dirname);
    const auth = {
      auth: {
        api_key: "key-6de0ec0b134e1c151930e0ac9471b0f2",
        domain: "litestudios.com.ng",
      },
    };
  
    const transporter = nodemailer.createTransport(nodeMailGun(auth));
  
    ejs.renderFile(path.join(__dirname, "..", "mail", "password-mail-recovery.ejs"), { data: data })
        .then((data) => {
            console.log("Rendering the EJS with this Mail", email);
            const mailOptions = {
                from: "support@wealthwisefx.co.uk",
                to: email,
                subject: "Password Reset - WWF",
                html: data,
            }
  
            transporter.sendMail(mailOptions)
                .then((success) => {
                    messageSent = true;
                    cb(null, success);
                    console.log("MESSAGE SENT!!!");
                })
                .catch((err) => {
                    cb(err, null);
                    console.log("ERROR SENDING MAIL OCCURED!!! =========>", err);
                    messageSent = false;
                });
        })
        .catch((error) => {
            console.log("ERROR CANNOT RENDER EJS TEMPLATE!!!============>", error);
            messageSent = false;
        });
 
    return messageSent;
    
}
  // Test


module.exports = sendMailToCustomer;