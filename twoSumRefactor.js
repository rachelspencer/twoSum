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

const twoSum = (arr, targetNum) => {
    let result = null;

    arr.forEach((num1, index1) => {
        arr.forEach((num2, index2) => {
            if (index1 !== index2 && num1 + num2 === targetNum){
                result = [index1, index2]
            }
        });
    });
    return result
};

console.log(twoSum(test1Arr, test1TargetNum));
console.log(twoSum(test2Arr, test2TargetNum));
console.log(twoSum(test3Arr, test3TargetNum));