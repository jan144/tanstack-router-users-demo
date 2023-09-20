import { Navigate, Route } from "@tanstack/react-router";
import { appLayoutRoute } from "../layout";

export const appIndexRoute = new Route({
  path: "/",
  component: () => <Navigate to={"/settings/users"} />,
  getParentRoute: () => appLayoutRoute,
});
