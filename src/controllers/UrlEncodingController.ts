import { Request, Response } from "express";

class UrlEncodingController {
  public encode(req: Request, res: Response): Response {
    console.log(req.body);
    const urlEncode = encodeURIComponent(req.body['raw-text']);
    return res.json({success: urlEncode});
  }
}

export default new UrlEncodingController();
