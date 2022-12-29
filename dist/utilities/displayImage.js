"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var requestChecker_1 = __importDefault(require("./requestChecker"));
var cacheChecker_1 = __importDefault(require("./cacheChecker"));
var imageResizer_1 = __importDefault(require("./imageResizer"));
var displayImages = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var queryParameter, filename, height, width, checkRequestStatus, imageFile, imageFile, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                queryParameter = req.query;
                filename = queryParameter.name;
                height = parseInt(queryParameter.height);
                width = parseInt(queryParameter.width);
                return [4 /*yield*/, (0, requestChecker_1.default)(filename, width, height)];
            case 1:
                checkRequestStatus = _a.sent();
                if (checkRequestStatus === 'No image name given') {
                    res.write("<p style='color: red; font-size: 16px'>No image name given.</p>\n                <p>Please enter url as follows:</p>\n                <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>");
                    return [2 /*return*/];
                }
                else if (checkRequestStatus === 'No height or width given') {
                    res.write("<p style='color: red; font-size: 16px'>No height or width given.</p>\n                <p>Please enter url as follows:</p>\n                <p>http://localhost:{port}/api/resize?name={image-name.jpg}&width={new-width}&height={new-height}</p>");
                    return [2 /*return*/];
                }
                else if (checkRequestStatus === 'Image does not exist') {
                    res.write("<p style=\"color: red; font-size: 16px\">\n            Image does not exist.\n          </p>");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, cacheChecker_1.default)(filename, width, height)];
            case 2:
                if (!!(_a.sent())) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, imageResizer_1.default)(filename, width, height)];
            case 3:
                _a.sent();
                return [4 /*yield*/, fs_1.promises.readFile("resizeImages/".concat(filename, "-").concat(width, "x").concat(height))];
            case 4:
                imageFile = _a.sent();
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<p style="color: green; font-size: 16px;">Image Resized</p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:imageFile/jpeg;base64,');
                res.write(Buffer.from(imageFile).toString('base64'));
                res.end('"/>');
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, fs_1.promises.readFile("resizeImages/".concat(filename, "-").concat(width, "x").concat(height))];
            case 6:
                imageFile = _a.sent();
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<p style="color: green; font-size: 16px;">Image Resized</p><img style="display: block; margin-left: auto; margin-right: auto;" src="data:imageFile/jpeg;base64,');
                res.write(Buffer.from(imageFile).toString('base64'));
                res.end('"/>');
                _a.label = 7;
            case 7: return [2 /*return*/];
            case 8:
                err_1 = _a.sent();
                console.log("An error occurred while resizing image: ".concat(err_1));
                return [3 /*break*/, 9];
            case 9:
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.default = displayImages;
