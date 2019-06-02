/*
          ____
        _| 4
      _| 3
    _| 2
___| 1
 0
Problem 1: Given a staircase size (4 in this case), 
  you can either take one or two steps, 
  count how many ways you can take the stairs
Problem 2: Given a staircase size and an object that tells you what number of steps you can take at once, 
  how many ways can you take the stairs
*/


/*

How to solve:

First think about simple cases: N = 1 or N = 2

    ____
___| 1
 0
With N = 1, only one way to solve.
  1 <- {[0, 1]} // path you take, zero to one

      ____
    _| 2
___| 1
 0
With N = 2, 2 ways, take steps 1 at a time, or take both steps at once
  2 <- {[0, 1, 2], [0, 2]} // path you take

        ____
      _| 3
    _| 2
___| 1
 0
With N = 3
  3 <- {[0, 1, 2, 3], [0, 1, 3], [0, 2, 3]}

            ____
        _| 4
      _| 3
    _| 2
___| 1
 0
With N = 4
  5 <- {[0, 1, 2, 3, 4], [0, 1, 2, 4],
        [0, 1, 3, 4], [0, 2, 3, 4],
        [0, 2, 4] }

Can you see the pattern? Me neither. Lets first go back to visualizing
Lets try to relabel from top to bottom:

N = 0
1 <- {[0]}
__
0

N = 1
1 <- {[1, 0]}
  ____
_| 0
1

N = 2
2 <- {[2, 1, 0], [2, 0]}
    ____
  _| 0
_| 1
2

N = 3
3 <- {[3, 2, 1, 0], [3, 1, 0], [3, 2, 0]}
      ____
    _| 0
  _| 1
_| 2
3

num_ways(3) = num_ways(2) + num_ways(1)
numWays(n) = numWays(n - 1) + numWays(n - 2);

N = 4
5 <- {[4, 3, 2, 1, 0], [4, 2, 1, 0],
      [4, 3, 1, 0], [4, 3, 2, 0],
      [4, 2, 0]}
          ____
        _| 0
      _| 1
    _| 2
___| 3
 4
*/



/**
 * @description Returns a nubmer of ways you can take the stairs
 * @param {number} N number of steps
 */
// Problem 1
// N = 4

// brute force ineffecient! like fibonacci O(2 ^ N);
function numWays(N){
  if(N == 0 || N == 1) return 1;
  else return numWays(n - 1) + numWays(n - 2);
}


// better using bottoms up
function numWaysBottomUp(N){
  if(N == 0 || N == 1) return 1;
  let nums = new Array(N + 1);
  nums[0] = 1; 
  nums[1] = 1;
  for(let i = 2; i < N; i++){
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  return nums[n];
}


/**
 * @description Returns a nubmer of ways you can take the stairs
 * @param {number} N number of steps
 * @param {object} X an object containing the number of steps you can take
 */
// Problem 2
// N = 4, X = {1, 3, 5}
function numWaysX(N, X){
  if(N == 0) return 1;
  let total = 0;
  for(let i of X){
    if(n - i >= 0)
      total += numWaysX(n - i, X);
  }
  return total;
}

function numWaysXBottomUp(N, X){
  if(N == 0) return 1;
  let nums = new Array(N + 1);
  nums[0] = 1;
  for(let i = 1; i < N; i++){
    let total = 0;
    for(let j of X){
      if(i - j >= 0){
        total += nums[i - j];
      }
      nums[i] = total;
    }
  }
  return nums[N];
}