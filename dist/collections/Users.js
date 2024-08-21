"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
var adminsAndUser = function (_a) {
    var user = _a.req.user;
    if (user.role === "admin")
        return true;
    return {
        id: {
            equals: user.id,
        },
    };
};
exports.Users = {
    slug: "users",
    auth: {
        verify: false /*{
          generateEmailHTML: ({ token }) => {
            return PrimaryActionEmailHtml({
              actionLabel: "verify your account",
              buttonText: "Verify Account",
              href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
            });
          },
        },
        */,
    },
    access: {
        read: adminsAndUser,
        create: function () { return true; },
        update: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.role === "admin";
        },
    },
    admin: {
        hidden: function (_a) {
            var user = _a.user;
            return user.role !== "admin";
        },
        defaultColumns: ["id"],
    },
    fields: [
        {
            name: "postalcode",
            label: "postalcode",
            type: "text",
        },
        {
            name: "city",
            label: "City",
            type: "text",
        },
        {
            name: "address",
            label: "Address",
            type: "text",
        },
        {
            name: "Country",
            label: "Country",
            type: "text",
        },
        {
            name: "Lastname",
            label: "Lastname",
            type: "text",
        },
        {
            name: "Firstname",
            label: "Firstname",
            type: "text",
        },
        {
            name: "Apartment",
            label: "Apartment",
            type: "text",
        },
        {
            name: "products",
            label: "Products",
            admin: {
                condition: function () { return false; },
            },
            type: "relationship",
            relationTo: "products",
            hasMany: true,
        },
        {
            name: "product_files",
            label: "Product files",
            admin: {
                condition: function () { return false; },
            },
            type: "relationship",
            relationTo: "product_files",
            hasMany: true,
        },
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
        },
        /*{
          name: "address",
          required: false,
          type: "text",
        },*/
        //{
        //name: "address",
        //label: "address",
        //admin: {
        //condition: () => false,
        //},
        //type: "relationship",
        //relationTo: "products",
        //},
    ],
};
