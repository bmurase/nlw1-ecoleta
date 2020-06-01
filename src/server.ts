import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuários");
  response.json(["h", "e", "l", "l", "o"]);
});

app.listen(3333);
