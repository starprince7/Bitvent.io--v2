const express = require("express");

const Customer = require("../model/customers");
const WithdrawalRequest = require("../model/withdrawRequest");
const { requireAuth2, requireAuth } = require("../middleware/authentication");

const ex = express.Router();


ex.post('/', async (req, res) => {
    console.log('Request In Exchange Router!!!')
    const { id, amount, currency } = req.body
    
    const customer = await Customer.findById(id)
    // await Customer.findByIdAndUpdate(id, {
    //     bitcoin_wallet: customer.wallet - amount
    // })

    if (amount > customer.wallet) {
        res.json({ error: 'Insufficient wallet balance' }).end()
        return
    }

    if (customer) {
        // FIRST CHECK THE CURRENCY TO KNOW
        // WHICH WALLET NEEDS TO BE UPDATED.
        if (currency == 'BTC') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                bitcoin_wallet: amount
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Bitcoin wallet`})
        }
        else if (currency == 'ETH') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                ethereum_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Ethereum wallet`})
        }
        else if (currency == 'USDT') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                tether_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your USDT wallet`})
        }
        else if (currency == 'BNB') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                binancecoin_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your BNB wallet`})
        }
        else if (currency == 'ADA') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                cardano_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Cardano(ADA) wallet`})
        }
        else if (currency == 'LTC') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                litecoin_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Litcoin(LTC) wallet`})
        }
        else if (currency == 'SOL') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                solana_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Solana(SOL) wallet`})
        }
        else if (currency == 'XRP') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                ripple_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your XRP wallet`})
        }
        else if (currency == 'DOGE') {
            await Customer.findByIdAndUpdate(id, {
                wallet: customer.wallet - amount,
                dogecoin_wallet: amount,
            })
            res.json({ msg: `Transaction succeeded, ${amount}.00 USD has been credited to your Dogecoin(DOGE) wallet`})
        }
    }
})


module.exports = ex