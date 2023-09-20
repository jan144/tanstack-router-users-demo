import { Router } from '@tanstack/react-router';
import { appLoaderClient } from './appLoaderClient';
import { rootRoute } from './RootRoute';
import { appLayout } from './routes/app/layout';
import { settingsRoute } from './routes/app/settings/route';
import { settingsUsersRoute } from './routes/app/settings/users/route';

const routeTree = rootRoute.addChildren([
  appLayout.addChildren([settingsRoute.addChildren([settingsUsersRoute])]),
]);

export const router = new Router({
  basepath: '/app',
  routeTree,
  defaultPendingComponent: () => null,
  defaultPreload: 'intent',
  context: {
    loaderClient: appLoaderClient,
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
