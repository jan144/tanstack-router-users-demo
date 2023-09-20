import { LoaderClientProvider } from '@tanstack/react-loaders';
import { RouterProvider } from '@tanstack/react-router';
import { FC } from 'react';
import { appLoaderClient } from './appLoaderClient';
import { router } from './router';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <LoaderClientProvider client={appLoaderClient}>
      <RouterProvider router={router} />
    </LoaderClientProvider>
  );
};
