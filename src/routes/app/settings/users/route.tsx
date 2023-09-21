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
  loader: async ({ routeSearch: { username } }) => ({
    users: await appLoaderClient.load(
      createLoaderOptions({
        key: "usersLoader",
        variables: { username },
      }),
    ),
  }),
  validateSearch: z.object({ username: z.string().optional() }),
});
