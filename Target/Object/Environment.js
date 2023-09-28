"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = void 0;
(await Promise.resolve().then(function () { return require("dotenv"); })).config();
exports.string = (await Promise.resolve().then(function () { return require("zod"); })).string;
exports.default = (await Promise.resolve().then(function () { return require("zod"); })).object({
    Email: (0, exports.string)().optional().default(""),
    ID: (0, exports.string)().optional().default(""),
    Key: (0, exports.string)().optional().default(""),
});
