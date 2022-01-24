"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepository = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("../entities/user");
function getRepository() {
    var conn = (0, typeorm_1.getConnection)();
    var movieRepository = conn.getRepository(user_1.User);
    return movieRepository;
}
exports.getRepository = getRepository;
