import { Route } from "@tanstack/react-router";
import { appLayout } from "../layout";

export const settingsRoute = new Route({
  path: "settings",
  getParentRoute: () => appLayout,
});
