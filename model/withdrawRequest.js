const mongoose = require("mongoose");
const schema = mongoose.Schema;


const withdrawalRequestSchema = new schema({
    email: String,
    amount: String,
    wallet_address: String,
    crypto_type: String,
})

const WithdrawalRequest = mongoose.model("withdrawalRequest", withdrawalRequestSchema);

module.exports = WithdrawalRequest;