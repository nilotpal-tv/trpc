import { createExpressMiddleware } from '@trpc/server/adapters/express';
import dotenv from 'dotenv';
import express from 'express';
import appRouter from './routes';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use('/', createExpressMiddleware({ router: appRouter }));

function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error({ error });
  }
}

startServer();
