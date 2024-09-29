let add = (x,y) =>{
    console.log("Marks is = "+x+y+ ", So you have to pripair hard for geeting good marks.");
}
add(5,7);

let myFunctionC = (name) =>{
    console.log("Hello " + name + " how are you");
}
myFunctionC("vishal");

//Become a Full-Stack Developer with HTML, CSS, JavaScript,React, Node.js, ExpressJs MongoDB and Docker

var a =["Become", "a", "Full-Stack"];
var b =[...a,"Developer", "with", "HTML,"];
var c =[...b,"CSS,","JavaScript,","React,"];
var d =[...c,"Node.js",",ExpressJs","MongoDB"];
var e =[...d,"and","Docker"]

var para ='';
for (i=0; i<e.length; i++){

    console.log(e[i]);
    para = para + e[i] + ' ';
}
console.log(para);