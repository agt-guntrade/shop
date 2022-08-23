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
var usersUpdate = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args, snekApi) {
        var createHash, File, sheet, json, mySheet, user, file;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("args", args);
                    _ctx.next = 3;
                    return import("crypto");
                case 3:
                    createHash = _ctx.sent.createHash;
                    _ctx.next = 6;
                    return import("node-fetch");
                case 6:
                    File = _ctx.sent.File;
                    _ctx.prev = 7;
                    _ctx.next = 10;
                    return snekApi.getSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME
                    });
                case 10:
                    sheet = _ctx.sent;
                    _ctx.next = 13;
                    return sheet.text();
                case 13:
                    json = _ctx.sent;
                    mySheet = JSON.parse(json);
                    user = mySheet.find(function(u) {
                        return u.id === args.id;
                    });
                    if (!user) {
                        _ctx.next = 20;
                        break;
                    }
                    {
                        if (args.password !== undefined) {
                            user.password = createHash("sha256").update(args.password).digest("hex");
                        }
                        if (args.fullName !== undefined) {
                            user.fullName = args.fullName;
                        }
                        if (args.isActive !== undefined) {
                            user.isActive = args.isActive;
                        }
                        console.log("user", user);
                    }
                    _ctx.next = 21;
                    break;
                case 20:
                    throw new Error("User ".concat(args.id, " does not exist"));
                case 21:
                    console.log("mySheet", mySheet);
                    file = new File([
                        JSON.stringify(mySheet, null, 2)
                    ], SHEET_FILE_NAME);
                    _ctx.next = 25;
                    return snekApi.updateSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME,
                        file: file
                    });
                case 25:
                    _ctx.next = 30;
                    break;
                case 27:
                    _ctx.prev = 27;
                    _ctx.t0 = _ctx["catch"](7);
                    throw new Error("Sheet ".concat(SHEET_NAME, " does not exist"));
                case 30:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                7,
                27
            ]
        ]);
    }));
    return function(args, snekApi) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "usersUpdate"
});
export default usersUpdate;
