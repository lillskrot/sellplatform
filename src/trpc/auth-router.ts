import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { SignInValidator } from "../lib/validators/sign-in-validator";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const {
        email,
        postalcode,
        city,
        address,
        Country,
        Lastname,
        Firstname,
        Apartment,
      } = input;

      const payload = await getPayloadClient();

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: "CONFLICT" });

      await payload.create({
        collection: "users",
        data: {
          email: email,
          password: "",
          postalcode: postalcode,
          city: city,
          address: address,
          Country: Country,
          Lastname: Lastname,
          Firstname: Firstname,
          Apartment: Apartment ?? "",
          role: "user",
        },
      });

      return { success: true, sentToEmail: email };
    }),

  createAndSignInPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input, ctx }) => {
      const {
        email,
        password,
        postalcode,
        city,
        address,
        Country,
        Lastname,
        Firstname,
        Apartment,
      } = input;

      const { res } = ctx;

      const payload = await getPayloadClient();

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: "CONFLICT" });

      await payload.create({
        collection: "users",
        data: {
          email: email,
          password: password,
          postalcode: postalcode,
          city: city,
          address: address,
          Country: Country,
          Lastname: Lastname,
          Firstname: Firstname,
          Apartment: Apartment,
          role: "user",
        },
      });

      try {
        await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
          res,
        });

        return { success: true };
      } catch (err) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: JSON.stringify(err),
        });
      }

      return { success: true, sentToEmail: email };
    }),

  verifyEmail: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      const { token } = input;

      const payload = await getPayloadClient();

      //const isVerified = await payload.verifyEmail({
      //collection: "users",
      //token,
      //});

      //if (!isVerified) throw new TRPCError({ code: "UNAUTHORIZED" });

      return { success: true };
    }),

  signIn: publicProcedure
    .input(SignInValidator)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      const { res } = ctx;

      const payload = await getPayloadClient();

      try {
        await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
          res,
        });

        return { success: true };
      } catch (err) {
        //throw new TRPCError({ code: "UNAUTHORIZED" });
      }
    }),
});
