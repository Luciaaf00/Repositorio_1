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
*/

fourth_array.forEach(function(element){
    console.log("Entramos en la iteración de "+element);
});

