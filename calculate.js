function findMode(arr){
    let maxVal = [];
    let modes = {};
    let currentCount = 0;
    let count = 1;
    
    for(let val in arr){
        val = parseInt(arr[val]);
        //value is not already included
        if (!modes[val]){
            modes[val] = 1;
        }
        //value is in obj, increase frequency
        else
            modes[val]++; 

        console.log(modes[val]);

        //More than one mode
        if(modes[val] === currentCount){
            maxVal.push(val);
            currentCount = modes[val];
        }
        //Highest frequency for a number
        if(modes[val] > currentCount){
            maxVal = [];
            maxVal.push(val);
            currentCount = modes[val];
        }
    }
    return maxVal;

}

function findMedian(arr){
    //sort array
    arr.sort((a,b) => a-b);

    //find the middle indx
    let middleIndex = Math.floor(arr.length/2);
    let median;

    //if even numbers in array, find middle of two numbers
    if(arr.length % 2 === 0){
        median = (arr[middleIndex] + arr[middleIndex-1]) / 2;
    }else{
        //find middle index
        median = arr[middleIndex];
    }
    return median;
}


function findMean(arr){
    let total = 0;
    let mean = 0;
    //array is empty
    if(arr.length === 0)
        return total;
    else{
        for(let val in arr){
            //add up all numbers
            total = total + parseInt(arr[val]);
        }
    }
    mean = Math.floor(total/arr.length);
    return mean;
}

module.exports = { findMode, findMedian, findMean };