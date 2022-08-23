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
var SHEET_NAME = "snek-functions-users";
var usersGet = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args, snekApi) {
        var sheet, json, obj, users;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("args", args);
                    // 1. Check if auth sheet exists, and if not, create it with default values
                    console.log("SHEETS TOKEN", process.env.SHEETS_TOKEN);
                    _ctx.prev = 2;
                    _ctx.next = 5;
                    return snekApi.getSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME
                    });
                case 5:
                    sheet = _ctx.sent;
                    _ctx.next = 8;
                    return sheet.text();
                case 8:
                    json = _ctx.sent;
                    obj = JSON.parse(json);
                    users = obj.map(function(u) {
                        return {
                            id: u.id,
                            email: u.email,
                            fullName: u.fullName,
                            createdAt: u.createdAt,
                            isActive: u.isActive
                        };
                    });
                    console.log("users", users);
                    return _ctx.abrupt("return", users);
                case 15:
                    _ctx.prev = 15;
                    _ctx.t0 = _ctx["catch"](2);
                    // just throw the error here again (should be changed to a better error handling)
                    throw _ctx.t0;
                case 18:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                2,
                15
            ]
        ]);
    }));
    return function(args, snekApi) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "usersGet"
});
export default usersGet;
