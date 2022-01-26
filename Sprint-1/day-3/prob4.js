
var arr1 = new Myarray(1,2,3);
function Myarray(){
    this.length = arguments.length;
    // Object.defineProperties(this,"length",{

    // })
    for(var i=0; i<this.length; i++){
        this[i] = arguments[i];
    }
}
Myarray.prototype.डालना= function(e){
    this[this.length] = e;
    this.length++;
}
arr1.डालना(6);
arr1.डालना(7);
Myarray.prototype.उलटा = function(){
    var arr2 =[];
    for(var i=this.length-1; i>=0;i--){
        arr2.push(this[i]);
    }
    return arr2;
}
Myarray.prototype.पहला=function(){
    return this[0];
}
var x = arr1.पहला();
console.log("First Element ",x);

let y = arr1.उलटा();
console.log("Reverse array: ",y);

var newarray = Object.values(arr1);
console.log("New array: ",newarray);