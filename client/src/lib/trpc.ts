import { createTRPCProxyClient } from '@trpc/client';
import { httpBatchLink } from '@trpc/client/dist/links';
import { AppRouter } from '../../../server/routes';

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: 'http://localhost:3000' })],
});
