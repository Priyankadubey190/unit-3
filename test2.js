function runProgram(input) {
    input=input.split("\n");
    let N=+input[0];
    let line=1;
    
    let arr=input[line].split(" ").map(Number);
    line++;
    let t=+input[line];
    
    //console.log(arr,t)
    new_num=[];
    index=0;
    
    
    
    function sub(N,t,new_num,index){
        
        if(new_num.length!=0){
            //console.log(new_num)
            let x=new_num.reduce((a,b)=>{
                return a+b;
                
            })
           // console.log(x)
            if(x==t){
               
                return true;
            }
            else if(x>t){
                return false ;
            }
        
            
            
        }
        if(index==N){
            return;
        }
        for(let i=index;i<N;i++){
            new_num.push(arr[i]);
            let y=sub(N,t,new_num,i+1);
            if(y)return true;
            
            new_num.pop();
        }
        //return false;
    }
    if (sub(N,t,new_num,index)==true){
        console.log("yes");
    }
    else{
        console.log("no");
    }
    
    
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