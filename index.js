document.writeln("This is DOM manipulation");
document.writeln("hello people"); //to write  on the web page
console.warn("this is a  warning"); // to create warnings in the console
console.error("this will create  errors in the  console"); //to create  errors
var x1 = 10;
var x2 = 20;
var res = x1 + x2;
console.log(res);
document.writeln(res);

var num1 = 23;
var num2 = "hello";
console.log(num1 + num2);

//object data type
var marks = {
  ravi: 80.5,
  teza: 56,
  sam: 90.433,
  tom: 67.778,
};

///undefined Datatype
var und;
console.log(und);
document.write(und);
console.log(45 + und);

//setTimeout and setInterval
login = () => {
  console.log("Loggin in :)");
};

//----------------------------------------------------------************-----------------------------------------
//The setTimeout() method calls a function after a number of milliseconds.
setTimeout(login, 2000);

//The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval.
setInterval(login, 4000);
//*****use clearTimeout/ clearInterval to stop the setTimeout/setInterval method *//////



//Local Storage
localStorage.setItem('name','Shanaya');
localStorage.getItem('name');
