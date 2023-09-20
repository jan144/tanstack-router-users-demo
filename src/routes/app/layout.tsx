import React from 'react';
import { Route } from '@tanstack/react-router';
import { rootRoute } from '../../RootRoute';
import { AppLayoutRouteComponent } from './AppLayoutRouteComponent';

export const appLayout = new Route({
  id: 'appLayout',
  getParentRoute: () => rootRoute,
  component: AppLayoutRouteComponent,
});
