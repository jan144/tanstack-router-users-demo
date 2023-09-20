import { LoaderClient } from '@tanstack/react-loaders';
import { usersLoader } from './routes/app/settings/users/loader';

export const appLoaderClient = new LoaderClient({
  loaders: [usersLoader],
});

declare module '@tanstack/react-loaders' {
  interface Register {
    loaderClient: typeof appLoaderClient;
  }
}
