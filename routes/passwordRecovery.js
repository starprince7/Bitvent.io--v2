const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Customer = require('../model/customers');
const { createToken, maxAge } = require('../utils/tokenCreator');
const sendMailToCustomer = require('../utils/mailer');

// to Genegrate a Unique Id Here!
const uniqid = require('uniqid')

const resetRouter = express.Router();


/* ==================== This-Route-Will-Be-Handle-By-The-React-App ==================== */
resetRouter.get('/', async (req, res) => {

    // Grab the resest Key/Token here!
    const key = req.query.key;
    console.log(key);

    if (!key) {
        res.json({ msg: 'Service denied, invalid access!' })
    } else {
        // Reset logic Here!
        try {
            console.log('finding.. user that needs account reset with d Key! ==->', key)
            const user = await Customer.findOne({ key })
            if (user) {
                // Here Send back a user to show that the reset link is valid!
                res.json({ user });
            } else res.json({ msg: 'Invalid link. Please restart this proccess'})
        } catch (error) {
            console.log('ERR! getting the User from DB...', error)
            res.json({ msg: 'Sorry, this link is invalid' })
        }
    }
})
/* ==================== This-Route-Will-Be-Handle-By-The-React-App ==================== */


resetRouter.post('/', async (req, res) => {
    console.log('Post To ===>  /password-reset? key =')
    const {id, newPassword, email} = req.body
    const _id = id.trim();
    if(!newPassword) res.json({ error: 'You have not entered your new Password!' })
    

    // First! hash new password and wait!
    const salt = await bcrypt.genSalt();
    const newHashedPassword = await bcrypt.hash(newPassword, salt);
    console.log(newHashedPassword);

    // Save new hashed password to the Data base!
    if (newHashedPassword) {
        console.log('Saving to Db!')
        try {
            const user = await Customer.findByIdAndUpdate(_id, {
              password: newHashedPassword
            }, { new: true })
            user && console.log('Reset Password Done! ...> User', user)
    
            // onSuccess, Do This!
            if (user) {
                const resetKey = await Customer.findByIdAndUpdate(user._id, { key: null }, { new: true });
                console.log('Reset Key ----> key', resetKey)
                const token = createToken(user._id);
                resetKey && res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
                resetKey && res.json({ user });
            }
        } catch (err) {
            console.log("Cannot Replace to new Password ===>", err)
            res.json({ error: 'Something wrong with our server, try agin later' })
        }
    }
})


resetRouter.get('/forgot-password', (req, res) => {
    res.render('password-recover');
})

resetRouter.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    console.log(email)

    let user;

    try {
        user = await Customer.findOne({ email });   
        !user && res.json({ error: 'This email is not registered! ' });
        console.log('The found User ==>', user)
     }
    catch (e) {
        console.log("First Try Catch() ==>", e)
    }

    // 2nd Try Catch.
    try {

        // Generate a unique Token /OR/ Key here!
        const key = uniqid('token_key-');
        console.log('The Unique Key Id is here --->', key)

        // Now send mail to customer Only when The Unique 
        // Id has been saved to the Db.

        // 1. Save To the Db First!
        Customer.findByIdAndUpdate(user._id, { key: key })
            .then( async (lostCustomer) => {
                // console.log('The Lost Customer ==', lostCustomer)
                
                const time = 1 * 60 * 60 * 1000;  /* wait one(1) Hour! */
                const data = {
                    client: lostCustomer,
                    key: key,
                    msg: 'This link will expire in one hour'
                }

                // 2. Send The mail to the customer here!
                sendMailToCustomer(lostCustomer.email, data, function (err, successMsg) {
                    if (err) {
                        res.status(500).json({ error: 'An error was thrown on the server! restart this proccess' });
                    } else {
                        // Send a response here!
                         res.status(200).json({ msg: 'A password reset link was sent to your email, Please follow the link to recover your account' });

                        // console.log('The Sent message ---', successMsg);

                        // Implement a Timer here to wait and delete the key
                        // After 20mins!
                        console.log('Timer to Delete key started!!')
                        
                        setTimeout(async () => {
                            const user = await Customer.findByIdAndUpdate(lostCustomer._id, {
                                key: null
                            }, { new: true })
                            user && console.log('Token Key has been cleared from D user... ==>', user);
                        }, time);
                    }                 

                });
                


            }).catch(error => {
                console.log(' ERR! Could not save the key to the database', error)
            })

     } catch (error) {
        console.log('ERR! can\'t find user...>', error)
    }
})

module.exports = resetRouter;