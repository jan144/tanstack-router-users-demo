import { RouterContext } from '@tanstack/react-router';

const routerContext = new RouterContext<{
  loaderClient: typeof appLoaderClient;
}>();

export const rootRoute = routerContext.createRootRoute({});
