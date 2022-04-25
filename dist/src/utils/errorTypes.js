"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = exports.unprocessableEntity = void 0;
function unprocessableEntity(message) {
    return { type: 'unprocessable_entity', message: message };
}
exports.unprocessableEntity = unprocessableEntity;
function badRequest(message) {
    return { type: 'bad_request', message: message };
}
exports.badRequest = badRequest;
