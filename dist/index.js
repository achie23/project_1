"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dependencies
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// create app object and port
var app = (0, express_1.default)();
var port = 3000;
// define a route handler for the default homepage
app.get('/', function (req, res) {
    res.send("<p style='color: blue; font-size: 16px'>Please enter url as:</p>\n    <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>");
});
app.use('/api', index_1.default);
// start the express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
exports.default = app;
