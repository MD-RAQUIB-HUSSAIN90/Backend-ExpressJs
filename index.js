const express = require("express");
const app = express();
let port = 8000;

// app.use((req, res) => {
//   console.log("request was received");
// //   res.send("this is a basic response");
//   res.send({
//     name:"Arsh",
//     age:24
//   })
// });

app.get("/", (req, res) => {
  res.send("this is a root path");
});
app.get("/apple", (req, res) => {
  res.send("this is a apple path");
});
app.get("/find", (req, res) => {
  res.send("this is a find path");
});
app.get("/search", (req, res) => {
  res.send("this is a search path");
});
app.get("*unknownPage", (req, res) => {
  res.send("this is a 404 path");
});
app.post("/", (req, res) => {
});

app.listen(port, () => {
  console.log(`app listening on port  ${port}`);
});
