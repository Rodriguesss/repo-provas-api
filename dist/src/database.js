"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
require("dotenv/config");
var client_1 = require("@prisma/client");
exports.connect = new client_1.PrismaClient();
