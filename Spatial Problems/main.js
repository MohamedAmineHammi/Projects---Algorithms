//Minding the Gap
function distanceBetweenPoints2D(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function distanceBetweenPoints3D(x1, y1, z1, x2, y2, z2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dz = z2 - z1;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  //Detecting the Overlap
  function checkRectangleOverlap(rect1, rect2) {
    const [x1, y1, width1, height1] = rect1;
    const [x2, y2, width2, height2] = rect2;
  
    if (x1 > x2 + width2 || x2 > x1 + width1) {
      return false; // Rectangles do not overlap horizontally
    }
  
    if (y1 > y2 + height2 || y2 > y1 + height1) {
      return false; // Rectangles do not overlap vertically
    }
  
    return true; // Rectangles overlap
  }

  //Sketching the Circle
  function drawCircle(screenWidth, screenHeight, centerX, centerY, radius) {
    let x = radius;
    let y = 0;
    let radiusError = 1 - x;
  
    while (x >= y) {
      setPixel(centerX + x, centerY + y);
      setPixel(centerX + y, centerY + x);
      setPixel(centerX - y, centerY + x);
      setPixel(centerX - x, centerY + y);
      setPixel(centerX - x, centerY - y);
      setPixel(centerX - y, centerY - x);
      setPixel(centerX + y, centerY - x);
      setPixel(centerX + x, centerY - y);
  
      y++;
  
      if (radiusError < 0) {
        radiusError += 2 * y + 1;
      } else {
        x--;
        radiusError += 2 * (y - x + 1);
      }
    }
  }

  //Describing the Rectangle (or, 'Get Rect')
  function createRectangle(x, y, width, height) {
    return {
      x,
      y,
      width,
      height,
    };
  }

  //Checking the Connectedness Count
  function hasIntersection(rectangles) {
    const count = rectangles.length;
    const intersected = new Array(count).fill(false);
  
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (checkRectangleOverlap(rectangles[i], rectangles[j])) {
          intersected[i] = true;
          intersected[j] = true;
        }
      }
    }
  
    return intersected;
  }

  //the graph is fully connected
  function isFullyConnected(rectangles) {
    const count = rectangles.length;
    const adjacencyMatrix = new Array(count).fill(0).map(() => new Array(count).fill(false));
  
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (checkRectangleOverlap(rectangles[i], rectangles[j])) {
          adjacencyMatrix[i][j] = true;
          adjacencyMatrix[j][i] = true;
        }
      }
    }
  
    const visited = new Array(count).fill(false);
    let connectedComponents = 0;
  
    function dfs(node) {
      visited[node] = true;
  
      for (let i = 0; i < count; i++) {
        if (adjacencyMatrix[node][i] && !visited[i]) {
          dfs(i);
        }
      }
    }
  
    for (let i = 0; i < count; i++) {
      if (!visited[i]) {
        dfs(i);
        connectedComponents++;
      }
    }
  
    return connectedComponents === 1;
  }