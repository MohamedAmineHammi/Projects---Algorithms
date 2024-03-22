// Check if a square is threatened by a queen
function isChessMoveSafe(intendedMove, queen) {
    const dx = Math.abs(intendedMove.x - queen.x);
    const dy = Math.abs(intendedMove.y - queen.y);
    
    return (
      intendedMove.x === queen.x || // Horizontal threat
      intendedMove.y === queen.y || // Vertical threat
      dx === dy // Diagonal threat
    );
  }
  
  // Get all chessboard squares not threatened by a queen
  function allSafeChessSquares(queen) {
    const safeSquares = [];
    
    for (let x = 1; x <= 8; x++) {
      for (let y = 1; y <= 8; y++) {
        const intendedMove = { x, y };
        
        if (!queen.some(q => isChessMoveSafe(intendedMove, q))) {
          safeSquares.push(intendedMove);
        }
      }
    }
    
    return safeSquares;
  }
  
  // Find all arrangements of eight queens on an 8x8 chessboard
  function eightQueens() {
    const solutions = [];
    
    function backtrack(queens) {
      if (queens.length === 8) {
        solutions.push(queens.slice());
        return;
      }
      
      for (let x = 1; x <= 8; x++) {
        const y = queens.length + 1;
        const queen = { x, y };
        
        if (!queens.some(q => isChessMoveSafe(queen, q))) {
          queens.push(queen);
          backtrack(queens);
          queens.pop();
        }
      }
    }
    
    backtrack([]);
    return solutions;
  }
  
  // Display the chessboard with queens in retro character graphs
  function displayQueens(board) {
    const symbols = ['♛', '□'];
    
    for (let y = 1; y <= 8; y++) {
      let row = '';
      for (let x = 1; x <= 8; x++) {
        const symbol = board.some(q => q.x === x && q.y === y) ? symbols[0] : symbols[1];
        row += symbol + ' ';
      }
      console.log(row);
    }
  }
  
  // Find all arrangements of N unthreatened queens on an X by Y rectangular board
  function nQueens(n, xSize, ySize) {
    const solutions = [];
    
    function backtrack(queens) {
      if (queens.length === n) {
        solutions.push(queens.slice());
        return;
      }
      
      for (let x = 1; x <= xSize; x++) {
        for (let y = 1; y <= ySize; y++) {
          const queen = { x, y };
          
          if (!queens.some(q => isChessMoveSafe(queen, q))) {
            queens.push(queen);
            backtrack(queens);
            queens.pop();
          }
        }
      }
    }
    
    backtrack([]);
    return solutions;
  }
  
  // Example usage
  const queen = [{ x: 4, y: 4 }];
  console.log(allSafeChessSquares(queen));
  
  const eightQueensSolutions = eightQueens();
  eightQueensSolutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    displayQueens(solution);
  });
  
  const nQueensSolutions = nQueens(8, 8, 8);
  nQueensSolutions.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    displayQueens(solution);
  });