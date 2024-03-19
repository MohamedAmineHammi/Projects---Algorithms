//Recursive List Length:
function getListLength(node) {
    if (node === null) {
      return 0;
    }
    return 1 + getListLength(node.next);
  }

  //Got Any Grapes?!?
  function getMaxGrapes(baggies) {
    const n = baggies.length;
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return baggies[0];
    }
    const dp = new Array(n);
    dp[0] = baggies[0];
    dp[1] = Math.max(baggies[0], baggies[1]);
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + baggies[i]);
    }
    return dp[n - 1];
  }