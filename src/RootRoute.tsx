import { RouterContext } from "@tanstack/react-router";
import { appLoaderClient } from "./appLoaderClient";

const routerContext = new RouterContext<{
  loaderClient: typeof appLoaderClient;
}>();

export const rootRoute = routerContext.createRootRoute({});
