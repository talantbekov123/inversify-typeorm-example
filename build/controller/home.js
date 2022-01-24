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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
var inversify_express_utils_1 = require("inversify-express-utils");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.get = function () {
        return 'Home sweet home';
    };
    __decorate([
        (0, inversify_express_utils_1.httpGet)('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], HomeController.prototype, "get", null);
    HomeController = __decorate([
        (0, inversify_express_utils_1.controller)('/')
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;
