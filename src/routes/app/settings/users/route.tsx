import { Route } from "@tanstack/react-router";
import { settingsRoute } from "../route";
import { SettingsUsers } from "./SettingsUsers";
import { createLoaderOptions } from "@tanstack/react-loaders";
import { appLoaderClient } from "../../../../appLoaderClient";
import { z } from "zod";

export const settingsUsersRoute = new Route({
  path: "users",
  getParentRoute: () => settingsRoute,
  component: SettingsUsers,
  beforeLoad: ({ routeSearch: { username } }) => {
    return {
      loaderOptions: createLoaderOptions({
        key: "usersLoader",
        variables: { username },
      }),
    };
  },
  loader: async ({ routeContext }) => ({
    users: await appLoaderClient.load(routeContext.loaderOptions),
  }),
  validateSearch: z.object({ username: z.string().optional() }),
  maxAge: 0,
});
