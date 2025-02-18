// const {fun1,x}=require("./module1")
// const {cal}=require("./module2")
// require("./module2")
// console.log("iam main module")
// console.log(fun1())
// console.log(x)

// let a=5;
// let b=6;
// console.log(cal(a,b))

// "use strict"
// a=45;
// console.log(a)

// const data=require("./data.json")
// console.log(data)

const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end("response provided");
});
server.listen("3101", () => {
  console.log("server is running");
});
