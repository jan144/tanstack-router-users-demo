import { Route } from "@tanstack/react-router";
import { appLayoutRoute } from "../layout";

export const settingsRoute = new Route({
  path: "settings",
  getParentRoute: () => appLayoutRoute,
});
