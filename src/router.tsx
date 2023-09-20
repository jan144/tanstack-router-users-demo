import { Router } from "@tanstack/react-router";
import { appLoaderClient } from "./appLoaderClient";
import { rootRoute } from "./RootRoute";
import { appLayoutRoute } from "./routes/app/layout";
import { settingsRoute } from "./routes/app/settings/route";
import { settingsUsersRoute } from "./routes/app/settings/users/route";
import { appIndexRoute } from "./routes/app/_index/route";

const routeTree = rootRoute.addChildren([
  appLayoutRoute.addChildren([
    appIndexRoute,
    settingsRoute.addChildren([settingsUsersRoute]),
  ]),
]);

export const router = new Router({
  basepath: "/app",
  routeTree,
  defaultPendingComponent: () => null,
  defaultPreload: "intent",
  context: {
    loaderClient: appLoaderClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
