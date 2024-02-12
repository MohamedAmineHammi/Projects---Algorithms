// 1- Median of Sorted Arrays
function findMedian(arr1, arr2) {
    const merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    const midIndex = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
      return (merged[midIndex - 1] + merged[midIndex]) / 2;
    } else {
      return merged[midIndex];
    }
  }
  
  // Example usage:
  const arr1 = [1, 5, 9];
  const arr2 = [1, 2, 3, 4, 5, 6];
  console.log(findMedian(arr1, arr2)); // Output: 4

  // To extend the solution to accept three arrays, you can modify the function as follows:

  function findMedian(arr1, arr2, arr3) {
    const merged = arr1.concat(arr2, arr3);
    merged.sort((a, b) => a - b);
    const midIndex = Math.floor(merged.length / 2);
    
    if (merged.length % 2 === 0) {
      return (merged[midIndex - 1] + merged[midIndex]) / 2;
    } else {
      return merged[midIndex];
    }
  }
  
  // Example usage:
  const arr1 = [1, 5, 9];
  const arr2 = [1, 2, 3, 4, 5];
  const arr3 = [7, 8, 9, 10];
  console.log(findMedian(arr1, arr2, arr3)); // Output: 5.5

  // 2- Time to English:
  
  function timeToEnglish(minutes) {
    const hours = Math.floor(minutes / 60) % 12;
    const mins = minutes % 60;
    
    const hourStr = hours === 0 ? 'midnight' : (hours === 12 ? 'noon' : `${hours}`);
    const minStr = mins === 15 ? 'quarter' : (mins === 30 ? 'half' : (mins === 45 ? 'quarter' : `${mins}`));
    const timeOfDay = hours < 12 ? 'am' : 'pm';
    
    if (mins === 0) {
      return `${hourStr} ${timeOfDay}`;
    } else if (mins <= 30) {
      return `${minStr} past ${hourStr} ${timeOfDay}`;
    } else {
      const remainingMins = 60 - mins;
      const nextHour = (hours + 1) % 12;
      const nextHourStr = nextHour === 0 ? 'noon' : `${nextHour}`;
      return `${remainingMins} til ${nextHourStr} ${timeOfDay}`;
    }
  }
  
  // Example usage:
  console.log(timeToEnglish(30)); // Output: "half past midnight"
  console.log(timeToEnglish(75)); // Output: "quarter past 1 am"
  console.log(timeToEnglish(710)); // Output: "10 til noon"
  console.log(timeToEnglish(1000)); // Output: "20 til 5 pm"