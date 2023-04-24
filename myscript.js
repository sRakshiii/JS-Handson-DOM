
const text = document.getElementById('text');
console.log(text.innerHTML);

const normal = document.getElementsByTagName('h1')[0];
console.log(normal.innerHTML);

const item = document.getElementsByClassName('box')[1];
console.log(item.innerHTML);

const sample = document.querySelector('h2');
sample.addEventListener("click", () => {
    console.log("hiii");
    sample.innerText = "Hello World";
});

function changeText() {
    const content = document.getElementById('change');
    content.innerHTML = '"Welcome to Elevation academy"';
}

const head = document.getElementById('heading');
head.addEventListener("click", () => {
    console.log("red");
    head.style.color = "red";
});

const changebox =document.getElementsByClassName("changeDirection")[0];
changebox.addEventListener("click", ()=>{
    changebox.style.flexDirection = "column";
}); 

setInterval(myFunction, 1000); 
 function myFunction() {

   var DateObj = new Date();
   var hour = DateObj.getHours();
   var minute = DateObj.getMinutes();
   var seconds = DateObj.getSeconds();
   
   if (hour >= 12) {
    hour = hour - 12;
   }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("time").innerText = `${hour} : ${minute} :${seconds}`;
  
 }
