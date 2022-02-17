const express = require("express");

const Customer = require("../model/customers");
const WithdrawalRequest = require("../model/withdrawRequest");
const { requireAuth2, requireAuth } = require("../middleware/authentication");

const ex = express.Router();


ex.post('/', async (req, res) => {
    console.log('Request In Exchange Router!!!')
    const { id, amount, currency } = req.body
    
    const customer = await Customer.findById(id)

    if (amount > customer.wallet) {
        res.json({ error: 'Insufficient wallet balance' }).end()
        return
    }

    if (customer) {
        // FIRST CHECK THE CURRENCY TO KNOW
        // WHICH WALLET NEEDS TO BE UPDATED.
        if (currency == 'BTC') {
            customer.wallet = customer.wallet - amount
            customer.bitcoin_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'ETH') {
            customer.wallet = customer.wallet - amount
            customer.ethereum_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'USDT') {
            customer.wallet = customer.wallet - amount
            customer.tether_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'BNB') {
            customer.wallet = customer.wallet - amount
            customer.binancecoin_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'ADA') {
            customer.wallet = customer.wallet - amount
            customer.cardano_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'LTC') {
            customer.wallet = customer.wallet - amount
            customer.litecoin_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'SOL') {
            customer.wallet = customer.wallet - amount
            customer.solana_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'XRP') {
            customer.wallet = customer.wallet - amount
            customer.ripple_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
        else if (currency == 'DOGE') {
            customer.wallet = customer.wallet - amount
            customer.doge_wallet = amount
            await customer.save()
            res.json({ msg: 'Transaction succeeded'})
        }
    }
})


module.exports = ex