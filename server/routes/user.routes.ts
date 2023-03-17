import z from 'zod';
import { t } from '../lib/trpc';

const getUserByEmailProcedure = t.procedure.input(
  z.object({
    email: z.string().email(),
  })
);

const userRouter = t.router({
  getUserByEmail: getUserByEmailProcedure.query(({ input }) => {
    console.log('INPUT', input);
    return { id: 1, name: 'Nilotpal' };
  }),
});

export default userRouter;
