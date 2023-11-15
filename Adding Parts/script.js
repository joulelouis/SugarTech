console.log('Hello World!');

// naive solution - O(n^2)
/*
function sumParts(numArr) {
    //create a dummy list to store the values of the new list
    let newList = [];
    
    //loop through the values of the numArr 
    for (let i = 0; i < numArr.length; i++) {
        //add the values in the numArr
        const sum = numArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        
        //push the result into the newList
        newList.push(sum);
        //remove the first index in the array
        numArr.shift();
    }

    return newList;
}
*/

// optimized solution - O(n)
function sumParts(numArr) {

    let totalSum = numArr.reduce((sum, value) => sum + value, 0);
    let tempSum = 0;
    let newList = [];

    for (let i = 0; i < numArr.length + 1; i++) {
        newList.push(totalSum - tempSum);
        tempSum += numArr[i];
    }

    return newList;
}

console.log(sumParts([0,1,3,6,10]));
console.log(sumParts([1,2,3,4,5,6]));