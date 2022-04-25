"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var PORT = process.env.PORT || 5000;
app_1.app.listen(PORT, function () {
    console.log('Servidor ON');
});
