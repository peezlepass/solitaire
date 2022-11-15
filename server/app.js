require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is on ${PORT} port!`));
