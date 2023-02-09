"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UrlEncodingController {
    encode(req, res) {
        console.log(req.body);
        const urlEncode = encodeURIComponent(req.body['raw-text']);
        return res.status(200).json({ success: urlEncode });
    }
}
exports.default = new UrlEncodingController();
