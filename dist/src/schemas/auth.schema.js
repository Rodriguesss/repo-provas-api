"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiLoginObject = exports.joiRegisterObject = void 0;
var joi_1 = __importDefault(require("joi"));
var joiRegisterObject = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(3).max(15).required(),
    password_confirmation: joi_1.default.any().valid(joi_1.default.ref('password')).required()
});
exports.joiRegisterObject = joiRegisterObject;
var joiLoginObject = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(3).max(15).required(),
});
exports.joiLoginObject = joiLoginObject;
