                    // let vs const vs var 
// x=90;
// var x;
// console.log(x);

                     // no hoisting concept 
// let x;
// x=90;
// console.log(x);

                           //block scope
// {
// let x;
// x=90;
// console.log(x);

// }
// console.log(x);
 

// {const pi=3.142;
//    console.log(pi); 
// }
// console.log(pi);

                        // es5 function  
// function test1(a){
//     return "hello wordl!"+a
    
// }
//                   //  arrow function 

// const test2=a=>'hello world!'+a;
    
// console.log(test1(2));

// console.log(test2(2));

                       // default parameters 

// const sum=(a=1,b=1)=>a+b
// console.log(sum(3,3));

                       // rest parameters

// const total=(a,b,...c)=>{
// let total=0;
// for(let i=0;i<c.length;i++){

//     total+=c[i];
// }
// return total+a+b;
// } 

// console.log(total(2,2,2,2,2,10,30));

                      // spread operator

// const arr=[2,3,4,5,6];
// console.log(...arr);

// const arr1=[2,3]
// const arr2=[4,5]
// const result=[...arr1,...arr2];
// result[0]++;  //deep clone
// console.log(arr1);
// console.log(arr2);

// console.log(result);


                       // map method in es6 

// const evens=[2,4,6,8,10];
// const odd=evens.map(v=>v+1);
// console.log(odd);

                       // filter method in es6 
                       
// const data=[11,2,4,6,8,10,7];
// const evens=data.filter(v=>v%2===0);
// console.log(data);
// console.log(evens);

                            // for each loop 
                            
// const data=[11,2,4,6,8,10,7];
// data.forEach(v=>console.log(v+1));

                       // ternary operators
                
// const num=2;
// const result=num>8?'hello':'world!'
// console.log(result);

                    // template literals /string interpolation

// const name=prompt("what is your name?");;
// const age=+prompt("what is your age?");

// console.log(`my name is ${name} and my age is ${age} and i am ${age>18?'eligible':'not Eligible'} for voting`);
