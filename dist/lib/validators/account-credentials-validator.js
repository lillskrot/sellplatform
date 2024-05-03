"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.AuthCredentialsValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
    zipcode: zod_1.z.string().min(5, {
        message: "Should include zipcode",
    }),
    city: zod_1.z.string().min(1, {
        message: "Should include city name",
    }),
    address: zod_1.z.string().min(1, {
        message: "Should include address",
    }),
});
