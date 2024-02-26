function applyFunction(arr, func) {
   
    var resultArray = [];
    
   
    for (var i = 0; i < arr.length; i++) {
       
        resultArray.push(func(arr[i]));
    }
    
    return resultArray;
}

// Example usage:
var inputArray = [1, 2, 3];
var doubleFunction = function(x) { return x * 2; };
var resultArray = applyFunction(inputArray, doubleFunction);
console.log(resultArray); 
