"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieController = void 0;
const common_1 = require("@nestjs/common");
let CookieController = class CookieController {
    index(res) {
        res.cookie('username', "I'm cookie", {
            httpOnly: true,
            maxAge: 4000,
        });
        res.send('已经设置cookie！');
    }
    index2(req) {
        var _a;
        console.log(req.cookies.username);
        return (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.username;
    }
    index3(res) {
        res.cookie('username', '我是明文！', {
            signed: true,
            httpOnly: true,
            maxAge: 40000,
        });
        res.send('已经设置cookie!');
    }
    index4(req) {
        return req.signedCookies;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookieController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('/gmc'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookieController.prototype, "index2", null);
__decorate([
    (0, common_1.Get)('ec'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookieController.prototype, "index3", null);
__decorate([
    (0, common_1.Get)('gmec'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CookieController.prototype, "index4", null);
CookieController = __decorate([
    (0, common_1.Controller)('cookie')
], CookieController);
exports.CookieController = CookieController;
//# sourceMappingURL=cookie.controller.js.map