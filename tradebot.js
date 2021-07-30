const runTradeBot = require('./utils/tradeBot')

// runTradeBot();

console.log('TradeBot() is called')

const food = 10;
const money = 20;
const result = food + money
console.log(result)

// Test
let count = 0;
let count_interval = setInterval(counter, 1000)

function counter() {
  count += 1;
  console.log('New Count Value', count)

  // This Test Passed!.
  // if (count === 05) {
  //   count = 0;
  //   clearInterval(count_interval);
  //   setTimeout(() => console.log('Task Done!!!'), 2000)
  //   count_interval = setInterval(counter, 1000)
  // }

  if (count === 86400) {
    count = 0;
    clearInterval(count_interval);
    runTradeBot(success => {
      console.log("Successful TopUp of =>>", success);
      count_interval = setInterval(counter, 1000)
    }) ;
  }
}