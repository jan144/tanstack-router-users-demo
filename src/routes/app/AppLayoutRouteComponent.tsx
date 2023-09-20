import { Outlet } from "@tanstack/react-router";

export const AppLayoutRouteComponent = () => {
  return (
    <div>
      <h1>App Layout</h1>
      <Outlet />
    </div>
  );
};
