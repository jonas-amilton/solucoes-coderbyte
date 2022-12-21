/*
Longest Increasing Sequence
Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of
the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest
to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences.
For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because 
that is the length of the longest increasing subsequence.
Examples
Input: [9, 9, 4, 2]
Output: 1
Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
Output: 7
*/


function LongestIncreasingSequence(arr) { 

  const sizeArray = Array(arr.length).fill(1);

  let elementAnt = 0;
  let elementAt = 1;

  while(elementAt < arr.length){
    if(arr[elementAnt] < arr[elementAt]){
      const newSize = sizeArray[elementAnt] + 1;

      if(newSize > sizeArray[elementAt]){
        sizeArray[elementAt] = newSize;
      }
    }

     elementAnt += 1;
      
      if(elementAnt === elementAt){
        elementAt += 1;
        elementAnt = 0;
      }
  }

  let mSequenc = 0;

  for(let i = 0; i < sizeArray.length; i++){
    if(sizeArray[i] > mSequenc){
      mSequenc = sizeArray[i];
    }
  }
  return mSequenc;

}
   
// keep this function call here 
console.log(LongestIncreasingSequence(readline()));
