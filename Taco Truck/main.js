function findOptimalTruckLocation(customers) {
    // Calculate the total distance for each potential truck location
    const distances = customers.map(([x, y]) => Math.abs(x) + Math.abs(y));
  
    // Find the index of the minimum distance
    const minDistanceIndex = distances.indexOf(Math.min(...distances));
  
    // Return the coordinates of the truck location with minimum distance
    return customers[minDistanceIndex].map((coord) => coord);
  }
  
  // Example usage
  const customers = [[10, 0], [-1, -10], [2, 4]];
  const optimalLocation = findOptimalTruckLocation(customers);
  console.log(optimalLocation); // Output: [2, 0]