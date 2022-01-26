// start cunstruct function method
function Grand(a,b,c){
    
    this.GrandFName1 = a,
    this.GrandMName2 = b,
    this.house = c
}

Grand.prototype.grand_parent=function(){
    console.log("Grand Parent"+this.GrandFName1+" "+this.GrandMName2);
}
function Parent(gr_Fat,gr_Mot,Fat,mom){
    Grand.call(this,gr_Fat,gr_Mot)
    this.Father= Fat;
    this.Mother=mom
}

//Inherit prototype property of grandparent through parent
Parent.prototype=Object.create(Grand.prototype)

Parent.prototype.describeP=function(){
    console.log("Parent Describe"+this.Father+" "+this.Mother)
}
function I(GrF,Grm,papa,mom,my_name){
    Parent.call(this,GrF,Grm,papa,mom);
    this.myName=my_name;
}
I.prototype=Object.create(Parent.prototype)
var myFamily = new I("Rampratap","Chhulakshana","Kharanand","Sudha","Priyanka");
console.log(myFamily)
myFamily.grand_parent()
myFamily.describeP()



//start object method
var GrandP = {
    GrandFName : "Ranpratap",
    GrandMName : "Chhulkshananna",
    house : "Same"
}

var nextgen = Object.create(GrandP);
 nextgen.Father_name = "Kharanand";
 nextgen.Mother_name = "Sudha"

 var thirdGen = Object.create(nextgen);
 thirdGen.Daughter = "Priyanka";
 thirdGen.Son = "Deepak";
console.log(GrandP,nextgen,thirdGen);