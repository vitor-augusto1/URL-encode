import { Request, Response } from "express";

class UrlEncodingController {
  public encode(req: Request, res: Response): Response {
    return res.json({success: "success"});
  }
}

export default new UrlEncodingController();
