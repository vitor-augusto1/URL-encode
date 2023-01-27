import path from "path";
import { Router } from "express";
import UrlEncodingController from "./controllers/UrlEncodingController";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("index");
})

routes.get("/encode", UrlEncodingController.encode)

export default routes;
