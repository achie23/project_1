"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dependencies
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("./api/resize"));
// import displayImages from '../utilities/displayImage';
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send("<p style='color: red; font-size: 16px'>No image name given.</p>\n    <p>Please enter url as follows:</p>\n    <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>");
});
routes.use('/resize', resize_1.default);
exports.default = routes;
