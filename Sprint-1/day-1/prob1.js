var arr = [2,3,4,5];  //original array

function output(arr){
    var copyarr = [];   //creating the new array via copy of original array
    for(var i = 0; i < arr.length; i++){
        copyarr.push(arr[i]);   //pushing the value of original array into copyarr array
    }
    return copyarr;  //returing the copyed array
}

var z = output(arr);
console.log(z);  //printing the value of copyed array
z[1] = 7;    //changing the value of copyed array of index 1
console.log(z);   //printing the value of copyed array after changing
console.log(arr);  //printing the value of original array