var a=Math.random();
var b=(Math.floor(a*6))+1;


var path="./images"+"/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src",path);

var e=((Math.floor(Math.random()*6)))+1;


var path2="./images/dice"+e+".png";
document.querySelectorAll(".img2")[0].setAttribute("src",path2);


if(b>e){
    document.querySelector("h1").innerHTML="Computer Wins!"
}
else if(b<e){
    document.querySelector("h1").textContent="You Win!"
    }
else{
    document.querySelector("h1").textContent="draw!"
}
