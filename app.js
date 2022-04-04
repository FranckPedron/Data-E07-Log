require("dotenv").config();
const express = require('express');
const app = express();

const router = require("./app/router");
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});