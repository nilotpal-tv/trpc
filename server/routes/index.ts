import z from 'zod';
import { t } from '../lib/trpc';
import userRouter from './user.routes';

const registerProcedure = t.procedure.input(
  z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  })
);

const loginProcedure = t.procedure.input(
  z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  })
);

const authRouter = t.router({
  register: registerProcedure.mutation(() => {
    return { id: 1, name: 'Nilotpal' };
  }),
  login: loginProcedure.mutation(() => {
    return { id: 1, name: 'Nilotpal' };
  }),
});

const appRouter = t.mergeRouters(authRouter, userRouter);

export default appRouter;
export type AppRouter = typeof appRouter;
