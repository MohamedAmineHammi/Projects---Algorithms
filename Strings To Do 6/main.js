// 1- Zip Arrays into Map:
function zipArraysIntoMap(arr1, arr2) {
    var result = {};
    for (var i = 0; i < arr1.length; i++) {
      result[arr1[i]] = arr2[i];
    }
    return result;
  }
  
  var arr1 = ["abc", 3, "yo"];
  var arr2 = [42, "wassup", true];
  var output = zipArraysIntoMap(arr1, arr2);
  console.log(output); // Output: {"abc": 42, 3: "wassup", "yo": true}

  // 2-Invert Hash:
  function invertHash(assocArr) {
    var result = {};
    for (var key in assocArr) {
      if (assocArr.hasOwnProperty(key)) {
        result[assocArr[key]] = key;
      }
    }
    return result;
  }
  
  var assocArr = {"name": "Zaphod", "charm": "high", "morals": "dicey"};
  var output = invertHash(assocArr);
  console.log(output); // Output: {"Zaphod": "name", "high": "charm", "dicey": "morals"}

  // 3-Number of Values (without .length):
  function countValues(obj) {
    var count = 0;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
  
  var obj = {"band": "Travis Shredd & the Good Ol’ Homeboys", "style": "Country/Metal/Rap", "album": "668: The Neighbor of the Beast"};
  var output = countValues(obj);
  console.log(output); // Output: 3