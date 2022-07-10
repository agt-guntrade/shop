function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
import regeneratorRuntime from "regenerator-runtime";
import { fn } from "./factory.js";
var PROJECT_ID = parseInt(process.env.PROJECT_ID || "") || 2;
var SHEETS_TOKEN = process.env.SHEETS_TOKEN;
var SHEET_NAME = "snek-functions-users";
var usersAuth = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args, snekApi) {
        var createHash, sheet, json, obj, user, maybePassword;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("args", args);
                    _ctx.next = 3;
                    return import("crypto");
                case 3:
                    createHash = _ctx.sent.createHash;
                    // 1. Check if auth sheet exists, and if not, create it with default values
                    console.log("sheetsToken", SHEETS_TOKEN);
                    _ctx.prev = 5;
                    _ctx.next = 8;
                    return snekApi.getSheet({
                        projectId: PROJECT_ID,
                        sheetsToken: SHEETS_TOKEN,
                        sheetName: SHEET_NAME
                    });
                case 8:
                    sheet = _ctx.sent;
                    _ctx.next = 11;
                    return sheet.text();
                case 11:
                    json = _ctx.sent;
                    obj = JSON.parse(json);
                    user = obj.find(function(u) {
                        return u.email === args.email;
                    });
                    if (!(user && user.isActive)) {
                        _ctx.next = 18;
                        break;
                    }
                    maybePassword = createHash("sha256").update(args.password).digest("hex");
                    if (!(user.password === maybePassword)) {
                        _ctx.next = 18;
                        break;
                    }
                    return _ctx.abrupt("return", {
                        id: user.id,
                        email: user.email,
                        fullName: user.fullName
                    });
                case 18:
                    _ctx.next = 23;
                    break;
                case 20:
                    _ctx.prev = 20;
                    _ctx.t0 = _ctx["catch"](5);
                    throw _ctx.t0;
                case 23:
                    return _ctx.abrupt("return", false);
                case 24:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                5,
                20
            ]
        ]);
    }));
    return function(args, snekApi) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "usersAuth"
});
export default usersAuth;
