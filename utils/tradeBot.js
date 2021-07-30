const Customer = require("../model/customers");


// Tradeing Bot

const runTradeBot = async (cb) => {

  const users = await Customer.find();
  if (users) {
    runLoop(users, (planType) => {
      if (planType) {
        cb(planType)
      }
    });
  }

};



const runLoop = (users, cb) => {
  // const num = Math.round(Math.random() * 10);

  users.forEach(async (user) => {

      // Here checks to see if Bot is allowed
      // to trade in account
      // Grab the previous Wallet Amount!
      // grab The previous day!
      // Only if bot is allowed for the Account callBot Func
      const isTradeOn = user.isTradeOn;      
      const prevWallet = user.wallet;
      const prevDay = user.tradingDay;
      
      console.log(' prevDay' ,  prevDay)
      
      // turn of trade only if Number
      // days is reached!
      turnOffTrade(user);
      
    // if Trade is On call the Bot Logic function on the user Account.
    isTradeOn && callBot(user, prevWallet, prevDay, (planType) => {
      if (planType) {
          cb(planType)
        }
      });
        
  });

};

const Random_num = Math.random();


// call Single logic now for each user! in the DB.
const callBot = async (user, prevWallet, prevDay, cb) => {
  console.log('Trade Bot-logic Called!')
      if (user.deposit !== [] && user.isTradeOn && user.tradingDay >= 1 && user.tradingDay < 7) {
        // If the condition Passes
        //  Wallet can now be Updated!.
        if (user.lastDeposit <= 5000) {
            console.log('The LAst Deposit===>', user.lastDeposit)
            const num = (user.lastDeposit * 25) / 100
            const customer = await Customer.findByIdAndUpdate(user._id, {
              wallet: prevWallet + num + Random_num,
              tradingDay: prevDay + 1
            });
            console.log("Just Added A TopUP with 25% to Customer wallet!!! ====>", customer.email);
            cb('25%');

          
        } else if (user.lastDeposit > 5000 && user.lastDeposit <= 15000) {

            const num = (user.lastDeposit * 35) / 100
            const customer = await Customer.findByIdAndUpdate(user._id, {
              wallet: prevWallet + num + Random_num,
              tradingDay: prevDay + 1
            });
            console.log("Just Added A TopUP with 35% to Customer wallet!!! ====>", customer.email);
            cb('35%');

        } else if (user.lastDeposit > 15000 && user.lastDeposit <= 50000) {

            const num = (user.lastDeposit * 50) / 100
            const customer = await Customer.findByIdAndUpdate(user._id, {
              wallet: prevWallet + num + Random_num,
              tradingDay: prevDay + 1
            });
            console.log("Just Added A TopUP with 50% to Customer wallet!!! ====>", customer.email);
            cb('50%');

        } else if (user.lastDeposit > 50000) {

            const num = (user.lastDeposit * 80) / 100
            const customer = await Customer.findByIdAndUpdate(user._id, {
              wallet: prevWallet + num + Random_num,
              tradingDay: prevDay + 1
            });
            console.log("Just Added A TopUP with 80% to Customer wallet!!! ====>", customer.email);
            cb('80%');

        }
        
     
  }
  
  if (user.tradingDay === 0)
    await Customer.findByIdAndUpdate(user._id, { tradingDay: prevDay + 1 })
}


async function turnOffTrade(user) {
  // Turn off trade indicator Here!
  if (user.tradingDay === 7 && user.isTradeOn) {
          
    const customer = await Customer.findByIdAndUpdate(user._id, {
      isTradeOn: false
    });
    console.log('Trade turned off for user ->>', customer.email)
  }
}

module.exports = runTradeBot;
