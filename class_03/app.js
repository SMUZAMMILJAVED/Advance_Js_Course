// class 
// class Human{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;

//     }
//     greet(){
//         console.log(`hello from ${this.name}!`);
//     }
//     static getVal(){
//         console.log("hello from static");

//     }
// }
// class Teacher extends Human {
//  constructor(name,id,course){
// super(name,id);
// this.course=course;
//  }
//  teach(){
//     console.log("teching ...");

//  }
// };
// const t_1=new Teacher("muzammil",472,'javascript');
// console.log(Teacher.getVal());
// localStorage 
// class Datasaver {
//     constructor(price){
//         this.price=price
//     }
//     static save(name, data) {
//         const json = JSON.stringify(data);
//         localStorage.setItem(name, json);
//         return true;

//     }
//     static getVal(name) {
//         const data = localStorage.getItem(name);
//         return JSON.parse(data);
//     }
//     get getPrice(){
//         return this.price;
//     }
//      set setPrice(str){
//         if(str==='apple'){
//            this.price = str

//         }


//     }
//      getTotal(){
//          return   this.price.reduce((p,c)=> p+c,0)
//         }
// }
// // Datasaver.save("name",{name:"muzammil"});
// const result=Datasaver.getVal('name');
// if(result){
//     console.log(result);

// }
// else{
//     console.log('no data found!');

// };
// const p_1=new Datasaver([20,20,20]);
// // p_1.setPrice='apple';
// console.log(p_1.getPrice);
// console.log(p_1.getTotal());


//symbol
// const sym= Symbol();
// console.log(Symbol()===Symbol());
// setInterval(()=>{
// console.log("hello");

// },2000);
// setTimeout and setInterval 
// const time=setInterval(() => {
//     console.log("hello!");

// }, 2000);
// setTimeout(()=>{
// console.log("done!");
// clearInterval(time);
// },4000);

// callb ack  /promises
// function count(time, cb) {
//     const interval = setInterval(() => {
//         console.log("hello!");

//     }, time * 1000);
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("done!");
//         cb();
//     }, time * 3 * 1000);
// };
                // callback hell 
// count(3, function () {
//     count(3, function () {
//         count(3, function () {
//             count(3, function () {
//                 count(3, function () {

//                 });
//             });
//         });
//     });

// })

                                 // solve by promise 

// function count(time) {
//     return new Promise((resolve,reject)=>{
//  const interval = setInterval(() => {
//         console.log("hello!");

//     }, time * 1000);
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log("done!");
//        resolve();
//     }, time * 3 * 1000);

//     })
   
// };
// count(1).then(()=>{console.log("from promise!")}).then(()=>{console.log("promise2")}).catch((err)=>{console.log("error");
// });
// function count(time,cb){
//     const interval=setInterval(()=>{
// console.log("hello!");

// },time*1000);
// setTimeout(()=>{
//     clearInterval(interval);
//     cb()
// },time*1000*3);
// };
// count(3,()=>{
//    count(3,()=>{
//     console.log("from call back");
    
//    });

    
// });
