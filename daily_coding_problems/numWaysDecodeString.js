function numWays(data){
  return helper(data, data.length);
}

function helper(data, k){
  if(k == 0) return 1;
  let start = data.length - k;
  if(data[start] === '0') return 0;

  result = helper(data, k - 1);
  if(k > 2 && parseInt(data[start] + data[start + 1]) <= 26){
    result += helper(data, k -2);
  }
  return result;
}

/* 
  this is ineffecient because:
  to find h(6) need to find h(5) and h(4)
  to find h(5) need to find h(4) and h(3)
  like fibonacci this is O(2^n)
*/


// need to use memoization and dynamic programming
function numWaysDP(data){
  let memo = new Array(data.length + 1).fill(null); // initialize to nulls;
  return helperDP(data, data.length, memo);
}

function helperDP(data, k){
  if(k == 0) return 1;
  let start = data.length - k;
  if(data[start] === '0') return 0;

  if(memo[k] !== null) return memo[k];

  result = helper(data, k - 1);
  if(k > 2 && parseInt(data[start] + data[start + 1]) <= 26){
    result += helper(data, k -2);
  }
  memo[k] = result;
  return result;
}

// this only takes O(n)
