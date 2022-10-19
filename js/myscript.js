
/*
/*
//alert("HELLO TO JS");
console.log("Chavalería!!!");

var table= "Normal table";
let chair ="One chair";
let testBoolean = true;
let testNumber = 10;
let testBooleanObject = new Boolean(true);
let testNumberObject = new Number(10);
let testStringObject =new String ("test")
//Mejor poner comillas dobles
let testString = "text";
console.log(table);
console.log(chair);
console.log(testBoolean);
console.log(testString);
console.log(testStringObject);
console.log(testBooleanObject);
console.log(testNumberObject);

//Concatenate variabeles
let name ="john";
let surname = "Doe";
let question = "How are you "+name+" "+surname+"?";
console.log(question);

//Otra cosa
let name1 ="john";
let surname1 = "Doe";
let age = 23;
let question1= `How old is ${name1} ${surname1}?`;
let answer = "He is "+age+" years old";
console.log(question1);
console.log(answer);
//Concatenar con el método string 
let name2  = "John";
let surname2 = "Doe";
let question2 = "How are you ".concat(name2)+" ".concat(surname2)+"?";
console.log(question2);

// Operaciones aritméticas
let operator_a=12;
let operator_b=6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

// Operaciones aritméticas 2
let operator_a2=3;
let operator_b2=3;
let expo = operator_a2 ** operator_b2;
let incr = ++operator_a2;
let decre = --operator_a2;
console.log(expo);
console.log(incr);
console.log(decre);
//si se pone detrás primero se proyecta en consola y después se decr
//console.log(operator_a2--);

//Operaciones de asignación
let x=5;
let y=6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

//typeof, null and undefined
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

let testNull = null;
console.log(typeof(testNull));

let testUndefined;
console.log(testUndefined);

//Array
var first_array = [];
var second_array = new Array(3);
var third_array =new Array(3,5);
var fourth_array =new Array(3,5,"Seville",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);
console.log(third_array[1]);
console.log(fourth_array[4][0]);
console.log(fourth_array.length);
console.log(fourth_array.push("Spain"));
//Añadir al principio
fourth_array.unshift(1);
console.log(fourth_array);
//for
/*
for(var i=fourth_array.length-1; i>=0; i--){
    console.log("Entramos en la iteración de "+fourth_array[i]);
}
*/
/*
var i=fourth_array.length-1;
for(;i>=0;i--){
    console.log("Entramos en la iteración de "+fourth_array[i]);
    
}


fourth_array.forEach(function(element){
    console.log("Entramos en la iteración de "+element);
});
//If /else /elseif
let aux=3;
if(aux>0){
    console.log("This number is positive");
}else if(aux<0){
    console.log("This number is negative");
}else{
    console.log("This number is 0");
}

//Regular expressions
var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni ="12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
}else{
    console.log("Incorrect DNI");
}
//Comparison operators
console.log(8==8);
console.log(8=="8");
console.log(8===8);
console.log(8==="8");

console.log(5>8);
console.log(5<8);
console.log(5>=8);
console.log(5<=8);

console.log(8!=8);
console.log(8!="8");
console.log(8!==8);
console.log(8!=="8");


console.log("test"=="test");
console.log("test"==='test');
console.log("test"=="Test");

//Loop while
var i1=1;
while (i1<10) {
    console.log("The number is "+i1);
    i1++;
}


//Date Object 
let today = new Date();
let first_october = new Date(2019, 10, 1);
console.log(today);
console.log(first_october);
console.log(today.getDay());

if(today>first_october){
    console.log("Today is after to first octuber");
}else{
    console.log("Today is before to first octuber");
}


function myFirstFunction(){
    console.log("Thank you for click");
}
function mySecondFunction(){
    console.log("Thank you for you interest");
}

//Select Dom
var div=document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);

var div=document.getElementsByTagName("div");
console.log(div);

var second_div=document.querySelector("#my_second_div");
console.log(second_div);

/*function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));
console.log($(".div_especial"));

//Function types
/*

var n_elevator_2 = numbers.map(function(n){return n*n;});
console.log(n_elevator_2);
*/
/*var numbers= [1,2,3,4];
var n_elevator_2 =numbers.map((n) => { return n*n; });
console.log(n_elevator_2);


var n_elevator_2=numbers.map( n => n*n);
console.log(n_elevator_2);

//En este caso se multiplica
let numbers= [[1,2], [2,3], [3,4], [4,5]];
let itself =numbers.map(([x,y])=>x*y);
console.log(itself);

//Create DOM Nodes
$("#btn2").addEventListener("click",function(){
    var input =document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder", "E-mail");
    input.setAttribute("name", "emails[]");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});

function bind_close(){
    let element =document.querySelectorAll(".close");
    for(var i=element.length-1;i>=0;i--){
        let el =element[i];
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none";
        });
    }
}

function myAlert(msg){
    //console.log($("body".childre[1]));
    var div=document.createElement("div");
    div.classList.add("alert");
    div.innerHTML=msg;
    var close =document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML="X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}

function $(selector){
    return document.querySelector(selector);
}

*/


/*

//Split
var testString="a,b,c,d,e,f,2,3,44,43";
var testArray=testString.split(",");
console.log(testArray)

//Join 
var testJoin= testArray.join(".");
console.log(testJoin);

//Filter
var testArray=[10,2,3,5,9];
var pairnumber=testArray.filter((num)=>{
    return num%2===0;

})
console.log(pairnumber);
//MAp
var testArray1=[1,2,3,5,7];
var testArray2=testArray1.map(function(num){
    return num*num;
});

console.log(testArray2);

//Callbacks
setTimeout(function(){
    console.log("hello world");

}, 2500);
//Closures
document.getElementById("btn3").addEventListener("click",()=>{
    console.log("Click detected");
})

//jason
var course ={
    title: "Course JS Advanced",
    section: 4,
    subsection:6,
    teacher: "Javier Prada",
    intro: function(){
        console.log("Welcome to "+this.title+" with "+this.section+" sections")
        this.function2();
            
        
    },
    function2: function(){
        console.log("Into to second function");

    }
}
console.log(course["teacher"]);
console.log(course.title);
console.log(course.intro());
*/
var course={
    title: "Course JS advanced",
    section:4,
    subsection:6,
    teacher:"Javier Prada",
    intro: function(){
        return "Welcome to "+this.title+" with "+this.section+" sections.";
    }
}

console.log(course["teacher"]);
console.log(course.teacher);

let text = course.intro();

console.log(text);