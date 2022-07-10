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
var usersAdd = fn(function() {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(args, snekApi) {
        var ref, createHash, randomUUID, File, mySheet, sheet, json, obj, sheetDefaultDataJSON, sheetDefaultData, sheet1, userExists, user, file;
        return regeneratorRuntime.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    console.log("args", args);
                    _ctx.next = 3;
                    return import("crypto");
                case 3:
                    ref = _ctx.sent;
                    createHash = ref.createHash;
                    randomUUID = ref.randomUUID;
                    _ctx.next = 8;
                    return import("node-fetch");
                case 8:
                    File = _ctx.sent.File;
                    mySheet = [];
                    _ctx.prev = 10;
                    _ctx.next = 13;
                    return snekApi.getSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME
                    });
                case 13:
                    sheet = _ctx.sent;
                    console.log("Sheet ".concat(sheet.name, " exists"));
                    _ctx.next = 17;
                    return sheet.text();
                case 17:
                    json = _ctx.sent;
                    obj = JSON.parse(json);
                    mySheet = obj;
                    _ctx.next = 31;
                    break;
                case 22:
                    _ctx.prev = 22;
                    _ctx.t0 = _ctx["catch"](10);
                    sheetDefaultDataJSON = [];
                    mySheet = sheetDefaultDataJSON;
                    sheetDefaultData = new File([
                        JSON.stringify(sheetDefaultDataJSON, null, 2)
                    ], SHEET_FILE_NAME);
                    _ctx.next = 29;
                    return snekApi.createSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME,
                        file: sheetDefaultData
                    });
                case 29:
                    sheet1 = _ctx.sent;
                    console.log("sheet created: ".concat(sheet1.name));
                case 31:
                    _ctx.prev = 31;
                    userExists = mySheet.find(function(row) {
                        return row.email === args.email;
                    });
                    if (!userExists) {
                        _ctx.next = 35;
                        break;
                    }
                    throw new Error('User "'.concat(args.email, '" already exists'));
                case 35:
                    user = {
                        id: randomUUID(),
                        email: args.email,
                        password: createHash("sha256").update(args.password).digest("hex"),
                        fullName: args.fullName,
                        createdAt: new Date().toISOString(),
                        isActive: true
                    };
                    // Add user
                    mySheet.push(user);
                    file = new File([
                        JSON.stringify(mySheet, null, 2)
                    ], SHEET_FILE_NAME);
                    _ctx.next = 40;
                    return snekApi.updateSheet({
                        projectId: PROJECT_ID,
                        sheetName: SHEET_NAME,
                        file: file
                    });
                case 40:
                    return _ctx.abrupt("return", user);
                case 42:
                case "end":
                    return _ctx.stop();
            }
        }, _callee, null, [
            [
                10,
                22,
                31,
                42
            ]
        ]);
    }));
    return function(args, snekApi) {
        return _ref.apply(this, arguments);
    };
}(), {
    name: "usersAdd"
});
export default usersAdd;
