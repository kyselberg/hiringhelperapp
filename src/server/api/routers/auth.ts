import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input, ctx }) => {
      const { supabase } = ctx;
      const { email, password } = input;

      console.log("supabase", supabase);

      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (user) {
          return {
            success: true,
          };
        }
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error?.message,
        });
      } catch (error) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Wrong email or password",
        });
      }
    }),

  signup: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input, ctx }) => {
      const { supabase } = ctx;
      const { email, password } = input;

      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.signUp({ email, password });
        if (user) {
          return {
            success: true,
          };
        }
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error?.message,
        });
      } catch (error) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Wrong email or password",
        });
      }
    }),
});
