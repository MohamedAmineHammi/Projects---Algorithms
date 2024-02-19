// 1- Coin Change with Object
function coinChange(cents) {
    var coins = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  
    coins.quarters = Math.floor(cents / 25);
    cents %= 25;
  
    coins.dimes = Math.floor(cents / 10);
    cents %= 10;
  
    coins.nickels = Math.floor(cents / 5);
    cents %= 5;
  
    coins.pennies = cents;
  
    return coins;
  }
  
  console.log(coinChange(97));

  // output
  {
    quarters: 3,
    dimes: 2,
    nickels: 0,
    pennies: 2
  }

  // 2- Max/Min/Average with Object

  function calculateStats(arr) {
    var stats = {
      max: arr[0],
      min: arr[0],
      average: 0
    };
  
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > stats.max) {
        stats.max = arr[i];
      }
      if (arr[i] < stats.min) {
        stats.min = arr[i];
      }
      sum += arr[i];
    }
  
    stats.average = sum / arr.length;
  
    return stats;
  }
  
  console.log(calculateStats([1, 5, 3, 9, 2]));

  Output:
  {
    max: 9,
    min: 1,
    average: 4
  }
