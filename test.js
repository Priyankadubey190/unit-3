// const user = {
//     name:"raj",
//     age:24,
//     city:"Pune"
// }
// let {name:xyz,city} = user
// console.log("name:",xyz,city)

//////
// var arr = "abc";
// var str = "";
// var start =0;
// var ar1 = []
// var end = arr.length -1;
// var k = 6;
// var sum = 0;
// function out(a,b,c,d){
//     if(c+1 >= d){
//        console.log(a);
//         }
       
//     for(var i=d;i<=c;i++){
//          out(a+b[i]+" ",b,c,i+1)
//     }
// }

// out(str,arr,end,start);

// var res = [3,5]
// var left = [3,5]
// var right = [0,9,8]
// var first = 2;
// var last = 0;
// var out = res.concat(left.slice(first)).concat(right.slice(last));

// console.log(out);

function runProgram(input) {
	input=input.split("\n");
	let n=input[0];
	let arr=input[1].split(" ").map(Number);
quickSort(arr, 0, arr.length - 1)

console.log(arr.join(" "));
function quickSort(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
 
  function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
}



if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}