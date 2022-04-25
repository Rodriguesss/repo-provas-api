"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var string_strip_html_1 = require("string-strip-html");
function dataSanitization(req, res, next) {
    var error = false;
    Object.keys(req.body).forEach(function (param) {
        req.body[param] = (0, string_strip_html_1.stripHtml)(req.body[param]).result.trim();
        req.body[param] === "" && (error = true);
    });
    if (error) {
        throw { type: 'unprocessable_entity', message: 'Invalid field informed.' };
    }
    next();
}
exports.default = dataSanitization;
