let express = require("express");
let app = express();

let port = 8080;
app.listen(port, () => {
  console.log("server is live on port " + port);
});

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// app.get("/search", (req, res) => {
//   res.send("Search whatever you want!");
// });
// app.get("/about", (req, res) => {
//   res.send("About us");
// });
// app.get("/contact/:username", (req, res) => {
//     console.log(req.params)
//   res.send("Contact with "+ req.params.username);
// });

// const fs = require("fs");

// fs.readFile("hello.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File readed:");
//   }
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>Search query is missing</h1>");
  }
  res.send(`<h1>Search results for query: ${q}</h1>`);
});
