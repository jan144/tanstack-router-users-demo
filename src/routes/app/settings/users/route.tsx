import React from 'react';
import { Route } from '@tanstack/react-router';
import { settingsRoute } from '../route';
import { SettingsUsers } from './SettingsUsers';
import { createLoaderOptions } from '@tanstack/react-loaders';
import { appLoaderClient } from '../../../../appLoaderClient';
import { z } from 'zod';

export const settingsUsersRoute = new Route({
  path: 'users',
  getParentRoute: () => settingsRoute,
  component: SettingsUsers,

  loader: async ({ routeContext: { loaderOptions } }) => {
    await appLoaderClient.load(loaderOptions);
  },
  beforeLoad: ({ routeSearch: { username } }) => {
    return {
      loaderOptions: createLoaderOptions({
        key: 'usersLoader',
        variables: { username },
      }),
    };
  },
  validateSearch: z.object({ username: z.string().optional() }),
});
