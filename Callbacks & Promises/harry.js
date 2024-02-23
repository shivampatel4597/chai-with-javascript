// To avoid pyramid of dom and avoid callback hell we use callback
// onload

let add = (a, b) => {
  return a * b;
};

let final = () => {
  return add(4, 5);
};
let count =0;
let id = setInterval(() => {
  console.log(final(),count++);
}, 2000);

setTimeout(()=>{
    clearInterval(id)
},20000)


