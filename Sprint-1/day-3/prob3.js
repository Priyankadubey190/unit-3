var arr = new Myarray(8,7,5,78,4);
function Myarray(){
    this.length=arguments.length;
    for(var i=0;i<this.length;i++){
        this[i]=arguments[i];
    }
}
console.log(arr);