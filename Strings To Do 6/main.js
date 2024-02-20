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