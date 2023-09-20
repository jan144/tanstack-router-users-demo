import { Route } from "@tanstack/react-router";
import { rootRoute } from "../../RootRoute";
import { AppLayoutRouteComponent } from "./AppLayoutRouteComponent";

export const appLayoutRoute = new Route({
  id: "appLayoutRoute",
  getParentRoute: () => rootRoute,
  component: AppLayoutRouteComponent,
});
