const express = require("express");
const app = express();
let port = 8000;

app.listen(port, () => {
  console.log(`app listening on port  ${port}`);
});

// app.use((req, res) => {
//   console.log("request was received");
// //   res.send("this is a basic response");
//   res.send({
//     name:"Arsh",
//     age:24
//   })
// });

app.get("/", (req, res) => {
  res.send("Hello this is a root path");
});
app.get("/apple", (req, res) => {
  res.send("This is a apple path");
});
app.get("/find", (req, res) => {
  res.send("This is a find path");
});
app.get("/search", (req, res) => {
  res.send("This is a search path");
});
// app.get("*unknownPage", (req, res) => {
//   res.send("This is a 404 path");
// });
app.post("/", (req, res) => {
  res.send("This is a post request");
});
app.get("/:username/:id/:age", (req, res) => {
  console.log(req.params);
  res.send(`<h1>User: ${req.params.username}</h1><p>ID: ${req.params.id}</p><p>Age: ${req.params.age}</p>`);
});
