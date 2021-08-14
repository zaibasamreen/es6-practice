

function vartest(){
    var x=1;
    if(true){
        var x=2;
        console.log(x);
    }
    console.log(x);
}
vartest()

function es6test() {
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
es6test()

//Es6 Arrow function: to solve the binding problem
//functions
function add (a,b) {
    return a +b;
}
//FE
var add1 = function(a,b){
    return a +b;
}


//Arrow-function

const add3 = (c,d) => {
    return c + d;
}


//arrow function in one statement
const add2 =(a,b) => a+b;
var res = add2(2,3);
console.log(res);


const demo = (a,b=10,c=5) => {
    return a + b + c;
}
const result=demo(5);
console.log(result);

//string concatenation

var to = ' everyone';
var greetings = 'hello';
var message = greetings + to + 'have a nice day';
console.log(message);

//Template literals

const mes = `${to} ${greetings} have a nice day`
console.log(mes);

//arrays

const array = [2,3,4];
const arr1 =[];
for (i=0; i<=array.length-1; i++){
    arr1.push(array[i] * 2)
}
console.log(arr1);

//Array helper method:
//map, find, filter,for each,reduce
 const mul2 = array.map(function(e){
     console.log(e)
 })
//  const mul2 =array.map((item) => {
//       return item * 2;

//   })
  
  console.log(mul2);
