// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: new request received\n`;
//   fs.appendFile("log.txt", log, (err,data)=>{
//     res.end("hello from server!");
//   });
// });
// myServer.listen(8000, () => {
//   console.log("server started");
// });
const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: new request received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error appending to log file:", err);
    } else {
      console.log("Request logged successfully");
    }
    res.end("hello from server!");
  });
});
myServer.listen(8000, () => {
  console.log("server started");
});

