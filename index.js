const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  res.end(data);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
