import express from "express";
import bodyParser from "body-parser";

const app = express();

const HOST = 'localhost';

const PORT = 5050;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`server is listening on http://${HOST}:${PORT}`);
  });