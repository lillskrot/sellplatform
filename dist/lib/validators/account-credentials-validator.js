"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthCredentialsValidator = void 0;
var zod_1 = require("zod");
exports.AuthCredentialsValidator = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
    postalcode: zod_1.z.string().min(5, {
        message: "Must include Postalcode",
    }),
    city: zod_1.z.string().min(1, {
        message: "Must include City",
    }),
    address: zod_1.z.string().min(1, {
        message: "Must include Address",
    }),
    Country: zod_1.z.string().min(1, {
        message: "Must include Country",
    }),
    Lastname: zod_1.z.string().min(1, {
        message: "Must include Lastname",
    }),
    Firstname: zod_1.z.string().min(1, {
        message: "Must include Firstname",
    }),
    Apartment: zod_1.z.string().min(1, {
        message: "Must include Apartment",
    }),
});
