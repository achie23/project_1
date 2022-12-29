"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dependencies
var express_1 = __importDefault(require("express"));
var displayImage_1 = __importDefault(require("../../utilities/displayImage"));
var resize = express_1.default.Router();
resize.get('/', displayImage_1.default, function (req, res) {
    // res.send(
    //   `<p style='color: red; font-size: 16px'>No image name given.</p>
    //   <p>Please enter url as follows:</p>
    //   <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>`
    // );
    res.end();
});
exports.default = resize;
