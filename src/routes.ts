import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  response.json(["h", "e", "l", "l", "o"]);
});

export default routes;
