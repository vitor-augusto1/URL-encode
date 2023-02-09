"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = require("express");
const UrlEncodingController_1 = __importDefault(require("./controllers/UrlEncodingController"));
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views/index.html'));
});
routes.post("/encode", UrlEncodingController_1.default.encode);
exports.default = routes;
