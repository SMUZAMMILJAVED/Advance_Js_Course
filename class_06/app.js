      // Map obj in javascript


// const obj={
//     1:'a',
//     "1":"b"
// }
// console.log(obj);

const data=new Map();
data.set("1","a");
data.set(1,"b");
console.log(data.get(1));
console.log(data.get("1"));
console.log(data.has("1"));
data.set('c','b');
data.delete('c');
console.log(data.has("c"));
console.log(data);
console.log(data.size);
for(let i of data){
    console.log(i);
    
}
for(let [key,value] of data){
    console.log(key,value);
    
}