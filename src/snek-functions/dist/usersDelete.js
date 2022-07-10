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
var SHEET_FILE_NAME = "snek-functions-users.json";
var usersDelete = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args, snekApi) {
        var File, sheet, json, mySheet, user, file;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("args", args);
                    _ctx.next = 3;
                    return import("node-fetch");
                case 3:
                    File = _ctx.sent.File;
                    _ctx.prev = 4;
                    _ctx.next = 7;
                    return snekApi.getSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME
                    });
                case 7:
                    sheet = _ctx.sent;
                    _ctx.next = 10;
                    return sheet.text();
                case 10:
                    json = _ctx.sent;
                    mySheet = JSON.parse(json);
                    user = mySheet.find(function(u) {
                        return u.id === args.id;
                    });
                    if (!user) {
                        _ctx.next = 17;
                        break;
                    }
                    {
                        mySheet = mySheet.filter(function(u) {
                            return u.id !== args.id;
                        });
                    }
                    _ctx.next = 18;
                    break;
                case 17:
                    throw new Error("User ".concat(args.id, " does not exist"));
                case 18:
                    file = new File([
                        JSON.stringify(mySheet, null, 2)
                    ], SHEET_FILE_NAME);
                    _ctx.next = 21;
                    return snekApi.updateSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME,
                        file: file
                    });
                case 21:
                    return _ctx.abrupt("return", true);
                case 24:
                    _ctx.prev = 24;
                    _ctx.t0 = _ctx["catch"](4);
                    throw _ctx.t0;
                case 28:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                4,
                24
            ]
        ]);
    }));
    return function(args, snekApi) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "usersDelete"
});
export default usersDelete;
