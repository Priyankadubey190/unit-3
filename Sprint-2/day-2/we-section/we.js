let queue = ["swanand", "maya", "bob", "ronaldo"];
var count = 3;
console.log(queue);
var x = queue.length - count;
  function register() {
    let name = document.getElementById("name").value;

    queue.push(name);
    console.log("queue:", queue);

    let message = `${name} your registration is succesfull. Please wait for your turn.`;

    alert(message);

    let promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (queue[0] == name) {
          resolve(`${name} its your turn now`);

          //clearInterval(interval);
        }
      }, 5000);
    });

    promise.then(function (res){
      alert(res);

    });

  }
 
  function startVaccination() {
    queue.shift();
    count--;
    if(count == 0){
      var y = queue.length;
      console.log("Remaining"+" "+y);
    }
    var p = document.createElement("p");
    p.textContent=y;
    document.querySelector("body").append(p);
   
   //console.log("Remaining"+" "+queue.length);
    if(count == 0){
      alert("vaccine out of stock, visit tomorrow");
    }
    
    if (queue.length === 0) {
      clearInterval(interval);
    }
    console.log("queue:",queue);
  }
  
   
  var interval = setInterval(startVaccination, 3000);
 
 
  
  