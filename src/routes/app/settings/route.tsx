import { Navigate, Route } from '@tanstack/react-router';
import React from 'react';
import { appLayout } from '../layout';

export const settingsRoute = new Route({
  path: 'settings',
  getParentRoute: () => appLayout,
});
