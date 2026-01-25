                                 //destructring
// const obj={
//     name:'muzammil',
//     id:34
// }
// const{id,name}=obj;
// console.log(name,id);

                          //shorthand assignment 
// let x=8;
// let y=10;
// const obj={
//     x,y,
    
// }
// console.log(obj);

                 // define function arrow / simplest(es6)

// const obj={
//     name:'syed muzammil javed',
//     greet:()=>{
//        console.log("hello from",this.name);
       
//     },
//     square(num){
//       return num**2;
//     }
// }
// console.log(obj.square(5));
// obj.greet()

                      // dynamic property name 

// const dynamic=()=>Math.floor(Math.random()*10+1);
// const obj={
//     name:'belel',
//     ["course"+ dynamic()]:"test data"
// }
// console.log(obj);

// const test=([a,b,c])=>{
// console.log(c);

// }
// test([5,6,7]);

// const test2=({name,id})=>{
// console.log(`user name is ${name} and id is ${id}!`);

// }
// test2({name:'test',id:45})