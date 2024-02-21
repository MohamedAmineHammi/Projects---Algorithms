// 1- String.concat:
const str1 = "Hello";
const str2 = "World";
const concatenatedString = str1.concat(str2);
console.log(concatenatedString);

// Output:
HelloWorld

// 2- String.slice:
const str = "Hello, World!";
const slicedString = str.slice(7, 12);
console.log(slicedString);

// Output:
World

// 3- String.trim:
const str = "   hello goodbye   ";
const trimmedString = str.trim();
console.log(trimmedString);

// Output
hello goodbye

// 4- String.split:
const str = "Hello,World,JavaScript";
const splittedArray = str.split(",");
console.log(splittedArray);

// Output:
["Hello", "World", "JavaScript"]

// 5- String.search:
const str = "Hello, World!";
const searchIndex = str.search("World");
console.log(searchIndex);

// Output:
7
