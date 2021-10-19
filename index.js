console.log("this is index.js ");
// object literal 
let marks = {
    Asif: 67,
    arif:69,
    sultan:89
}
console.log(marks);
// function 
function fAsif() {
    
}
console.log(typeof fAsif);

// date 
let date = new Date (3400, 4, 5 )
console.log(date)

// somting.toString
let i = new Date()
console.log(i.toString());

// number vs  string
let stri1 = Number("900")
console.log(stri1,( typeof stri1))

// type coercion 
 let num1 ="78";
 let num2 = 67;
console.log(num1 + num2);

// conts 
const name = "Asif"
const city = "Asif"
console.log(name + " "  + city);

// indexof
let html;
html = "<h1> i am Asif </h1>"
console.log(html.indexOf('s'));
console.log(html.charAt(8))
console.log(html.startsWith('<'));
console.log(html.substring(0,2));
console.log(html.slice(-4));
console.log(html.split(' '))
console.log(html.replace('rohan','Asif'));

let fruit1 = "apple";
let fruits2 = "watermelon";
// `` bactiks are use for object and in that we can write multipal tags and use ${} for mationtion specific var 
let myhtml = `hello  ${name} 
<h1> i am Asif i like to eat fruits </h1> 
<p> you like ${fruit1} and ${fruits2}</p> `;
document.body.innerHTML = myhtml;

// array and objects 
// const stmarks = [45,56,78,90];
// console.log(stmarks[3]); 

let arr =new Array (1, 4 , true , "Asif" );
console.log(arr)
// Array.isArray is a type of array which conclude that the give arr is array 
// if we write 'arr' as string then it shows false beacs it is not an array it is string 
console.log(Array.isArray(arr));
arr[1]= "Asif";
console.log(arr);
 arr[2]="sayyad"
 console.log(arr);
 let arrAsif=arr[2]
 console.log( 'Asif:', arrAsif);

//  indexof 
let stmarks = [45,56,78,90];
let value = stmarks.lastIndexOf(90);
// console.log(value);

// mutating or modifying or push
// push = it works as added one Element in array at the last position  
stmarks.push(15);
console.log(stmarks);
// unshift= added one Elementat the first position of given array 
stmarks.unshift(98);
console.log(stmarks);
// pop= removing one element from the last position 
 stmarks.pop();
 console.log(stmarks);

//  shift removing element form the first position 
stmarks.shift();
console.log(stmarks);

// splice its workas as it remove Elementaccording to the number we are shown in the splice bracket 
stmarks.splice(1,2);
console.log(stmarks);

// reverse its works as it reverse the array element 
stmarks.reverse();
console.log(stmarks);

// concat= its works as it combine the two array 
let stmarks2 =[1,4,6,8,9];
stmarks=stmarks.concat(stmarks2)
console.log(stmarks)

// object 
// how to write the given object and  
let object = {
    name: "Asif",
    city: "nanded",
    marks1: [12,34,56,78,89],
    isFinite: true
}
console.log(object);
console.log(object.name);

// if else conditions in js 
// if else =agar magar 
// == comparision oprater it comparate a==2 it means a is equal ? to 2

let  Age ='23';
if (Age!=23){
    console.log("The Age is 23");
}
else if (Age==='34') {
    console.log("The Age is 34");   
} 

else{
    console.log("The Age is not 23");
}

// switch 
// const age = 1
// switch (age) {
//     case 1:
//         console.log("you are 1");
        
//         break;
//     case 2:
//         console.log("you are 2");
        
//         break;
//     case 3:
//         console.log("you are 3");
        
//         break;

//     default:
//         console.log("the is not mentioned")
//         break;
// }
const age = 5
switch (age) {
    case 1:
        console.log("you are 1");
        break;
    case 2:
        console.log("you are 2 ");
        break;
    case 3:
        console.log("you are 3");
        break;
    case 4:
        console.log("you are 4");
        break;
    case 5:
        console.log("you are 5");
        break;
    case 6:
        console.log("you are 6");
        break;

    default:
        console.log("you are unknown");
        break;
}


// for loop
let a=34;
a +=1;
a++;
a++;
// console.log(a);

    
for ( i = 0; i <100; i++) {
    //  console.log(i);
    
}

// while loop 
let j=0;
while (j<50) {
    console.log(j);
    j+=2;
    
}
// do while loop 

let k=0;
do {
    console.log(k+2);
    if (k===5) {
        break;
        
    }
    k+=1;
} while (k<100);


// manipulating website using js 
// alert("asif");
// a= prompt("asif is good boy");
let b = window.document
console.log(b);
b=window.innerHeight;
b=window.innerWidth;
console.log(b);

let obja ={
    a: 1,
    name: "asif",
    city: "nanded",
    func: function myfunc(number) {
        console.log("the number is " + number);
        
    }
}
console.log(obja);

document.addEventListener("click", function click() {
    console.log("clicked");
    alert("hellow");
    
})