const express = require("express");
const app = express();
const port = 3000;
/* GET users listing. */
app.get("/api/test", function (req, res) {
  console.log("here");
  res.send("respond with a resource");
  //   res.json([
  //     {
  //       id: 1,
  //       name: "Hiccup",
  //       password: "hiccup",
  //     },
  //     {
  //       id: 2,
  //       name: "King Arthur",
  //       password: "king-arthur",
  //     },
  //   ]);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));
