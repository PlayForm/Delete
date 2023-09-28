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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
// This is used only once because:
// 'await' expressions cannot be used in a parameter initializer.ts(2524)
exports.Environment = (await Promise.resolve().then(function () { return require("../Object/Environment.js"); })).default;
/**
 * The Delete function deletes all deployments associated with a specific project ID using the
 * Cloudflare API.
 * @param Email - The `Email` parameter is the email address associated with the Cloudflare account. It
 * is used to authenticate the API request.
 * @param Key - The `Key` parameter is the authentication key used to access the Cloudflare API. It is
 * used to authenticate the request and verify the identity of the user making the request.
 * @param ID - The ID parameter represents the ID of the Cloudflare account. It is used to identify the
 * account for which the deployments need to be deleted.
 * @returns The function `Delete` returns an array of IDs that have been deleted.
 */
// @TODO: Find a way to use await in parameters
exports.default = (function (_a) {
    var _b = _a === void 0 ? exports.Environment.parse(process.env) : _a, Email = _b.Email, Key = _b.Key, ID = _b.ID;
    return __awaiter(void 0, void 0, void 0, function () {
        var Header, Deleted, _i, _c, name, _d, _e, _f, id, created_on, _Error_1;
        var _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    Header = {
                        "content-type": "application/json;charset=UTF-8",
                        "X-Auth-Email": Email,
                        "X-Auth-Key": Key,
                    };
                    Header["X-Auth-Email"] = Email !== null && Email !== void 0 ? Email : Header["X-Auth-Email"];
                    Header["X-Auth-Key"] = Key !== null && Key !== void 0 ? Key : Header["X-Auth-Key"];
                    Deleted = [];
                    _i = 0;
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./Project.js"); })];
                case 1: return [4 /*yield*/, (_h.sent()).default(ID, Header)];
                case 2:
                    _c = (_g = (_h.sent())) !== null && _g !== void 0 ? _g : [];
                    _h.label = 3;
                case 3:
                    if (!(_i < _c.length)) return [3 /*break*/, 12];
                    name = _c[_i].name;
                    _d = 0;
                    return [4 /*yield*/, (function (Project) { return __awaiter(void 0, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require("./Deployment.js"); })];
                                    case 1: return [4 /*yield*/, (_b.sent()).default(ID, Project, Header)];
                                    case 2: return [2 /*return*/, (_a = (_b.sent()).splice(0, 500)) !== null && _a !== void 0 ? _a : []];
                                }
                            });
                        }); })(name)];
                case 4:
                    _e = (_h.sent()).reverse();
                    _h.label = 5;
                case 5:
                    if (!(_d < _e.length)) return [3 /*break*/, 11];
                    _f = _e[_d], id = _f.id, created_on = _f.created_on;
                    if (!
                    // @ts-ignore
                    ((Date.now() - new Date(created_on)) / 86400000 >
                        7)) 
                    // @ts-ignore
                    return [3 /*break*/, 10];
                    _h.label = 6;
                case 6:
                    _h.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, fetch("".concat("https://api.cloudflare.com/client/v4/accounts/".concat(ID, "/pages/projects/").concat(name, "/deployments"), "/").concat(id), {
                            method: "DELETE",
                            headers: Header,
                        })];
                case 7:
                    _h.sent();
                    return [3 /*break*/, 9];
                case 8:
                    _Error_1 = _h.sent();
                    return [3 /*break*/, 9];
                case 9:
                    Deleted.push(id);
                    _h.label = 10;
                case 10:
                    _d++;
                    return [3 /*break*/, 5];
                case 11:
                    _i++;
                    return [3 /*break*/, 3];
                case 12: return [2 /*return*/, Deleted];
            }
        });
    });
});
