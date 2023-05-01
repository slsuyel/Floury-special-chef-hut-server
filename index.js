const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const allData = require("./data/alldata.json");
// const allPlace = require("./data/place.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/alldata", (req, res) => {
  res.send(allData);
});

// app.get("/places", (req, res) => {
//   res.send(allPlace);
// });

// app.get("/places/:id", (req, res) => {
//     const idd = parseInt(req.params.id); 
//     console.log(idd);
//     const selected = allPlace.find((place) => place.id === idd);
//     res.send(selected);
//   });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
