                                   // polymorphism 
// class Person{
//     speak(){
//         console.log('speaking...');

//     }
// }
// class Teacher extends Person{
//     speak(){
//         console.log('teaching...');

//     }
// }
// class Student extends Person{
// speak(){
//         console.log('ask questions...');

//     }
// }
// class Employee extends Person{

// }
// const p_1=new Person()
// const t_1=new Teacher()
// const s_1=new Student()
// const e_1=new Employee()
// p_1.speak();
// t_1.speak()
// s_1.speak()
// e_1.speak();

//                                      //Encapsulation
// class Atm{
//     #balance='4000'
//     checkBlance(){
//        console.log( this.#balance);

//     }
// }
// const atm_1=new Atm();
// atm_1.checkBlance();
// console.log(atm_1.#balance);


                                      // abstraction 
// class Car{
//     engine(){
//         console.log("starting engine...");

//     }
//     run(){
//         this.engine();
//         console.log("running");

//     }
// }
// const c_1=new Car();
// c_1.run();

                        //  lexical scope in js

// let city = "karachi ";
// function test(){
//     console.log(city);

// }
// test()
// let country = 'pakistan';
// function outer() {
//     let city = "karachi";
//     function inner() {
//         let area = "orangi town";
//         console.log(city);
//         console.log(area);
//         console.log(country);


//     }
//     inner();
// }
// outer();
                               //closure in js
// let country = 'pakistan';
// function outer() {
//     let city = "karachi";
//    return function inner() {
//         let area = "orangi town";
//         console.log(city);
//         console.log(area);
//         console.log(country);


//     }
   
// }
// const returnOfOuterFunction=outer();
// returnOfOuterFunction();
