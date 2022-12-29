"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var outputImgPath = function (filename, width, height) {
    return "images/resizedImages/".concat(filename).concat(width, "x").concat(height, ".jpg");
};
exports.default = outputImgPath;
