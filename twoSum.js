// takes an array of nums and an integer target
//return indicies of the two nums that add up to target

// assume: each input would have exactly one solution
// assume: you may not use the same um twice
// return the answer in any order

const test1Arr = [4, 6, 10, 3, 4];
const test1TargetNum = 9;
// 1 & 3

const test2Arr = [5, 7, 28, 48];
const test2TargetNum = 55;
// 1 & 3

const test3Arr = [19, 3, 53, 3, 1, 7];
const test3TargetNum = 60;
// 2 & 5

// check if index[0] + index[1] === targetNum
// check if index[0] + index[2] === targetNum
// check if index[0] + index[3] === targetNum

const twoSum = (arr, targetNum) => {
  
  for (let i = 0; i < arr.length; i++){
    for (let j = 1; j < arr.length-1; j++){
            if (arr[i] + arr[j] === targetNum){
                const index1 = arr.indexOf(arr[i])
                const index2 = arr.indexOf(arr[j])
                return `The values at indexes ${index1} and ${index2} equal the target number of ${targetNum}` 
            }
        }
    }
};

console.log(twoSum(test1Arr, test1TargetNum));
console.log(twoSum(test2Arr, test2TargetNum));
console.log(twoSum(test3Arr, test3TargetNum));