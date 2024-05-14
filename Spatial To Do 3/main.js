// Piano Tuners
const pianoTunersUS = 30000; // Just an estimate

// Basketballs in a 747
const planeVolume = 972000; // in cubic feet
const basketballVolume = 0.0007; // in cubic feet
const basketballsIn747 = Math.floor(planeVolume / basketballVolume);

// Kindergarten Teachers
const kindergartenTeachersWA = 15000; // Just an estimate

// Weight of a Ferry
const ferryWeightEmpty = 735000; // in pounds
const ferryWeightFull = 930000; // in pounds

// Hot Diggity
const hotDogsPerCow = 800; // Just an estimate

// Beachfront Property in Colorado
const oceanRiseColorado = "Colorado doesn't have oceanfront property.";

// Earth’s Circumference
const earthCircumference = 24901; // in miles

// Gas Stations
const gasStationsState = 15000; // Just an estimate

// Line ‘Em Up
const equatorLength = 24859.82; // in miles
const golfBallDiameter = 1.68; // in inches
const golfBallsForEquator = Math.ceil((equatorLength * 5280 * 12) / golfBallDiameter);

// Building Capacity
const buildingCapacity = 5000; // Just an estimate

// Painting a Room
const cansOfPaint = 20; // Just a guess

// Blades of Grass
const bladesOfGrassState = 1e9; // Just an estimate

// Lottery Stack
const powerballNumbers = 60;
const powerballStackHeight = Math.pow(powerballNumbers, 7) * 0.0025; // in miles

// Displaying Results
console.log("Piano Tuners in the U.S.: " + pianoTunersUS);
console.log("Basketballs in a 747: " + basketballsIn747 + ", using the cargo hold and cabin space.");
console.log("Kindergarten Teachers in Washington state: " + kindergartenTeachersWA);
console.log("Weight of the Bainbridge Island ferry (empty): " + ferryWeightEmpty + " pounds.");
console.log("Weight of the Bainbridge Island ferry (full): " + ferryWeightFull + " pounds.");
console.log("Hot dogs made from an adult cow: " + hotDogsPerCow);
console.log("Rise of ocean levels if all ice melted in Colorado: " + oceanRiseColorado);
console.log("Earth’s Circumference: " + earthCircumference + " miles.");
console.log("Gas stations in this state: " + gasStationsState);
console.log("Golf balls required to encircle the Earth at the equator: " + golfBallsForEquator);
console.log("Number of people working in a 72-story office building: " + buildingCapacity);
console.log("Cans of paint needed to paint a room: " + cansOfPaint);
console.log("Estimated blades of grass in the state: " + bladesOfGrassState);
console.log("Height of a stack of every possible Powerball ticket: " + powerballStackHeight + " miles.");
