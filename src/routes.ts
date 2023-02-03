import path from "path";
import { Router } from "express";
import UrlEncodingController from "./controllers/UrlEncodingController";

const routes = Router();

routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
})

routes.post("/encode", UrlEncodingController.encode)

export default routes;
