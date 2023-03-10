require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
const { ConectionDb } = require("./DB/conection");
/* DB CONECTION */
ConectionDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } else {
    console.log(`Conection error: ${err}`);
  }
});
/* ROUTES */
app.use("/", require("./routes"));
