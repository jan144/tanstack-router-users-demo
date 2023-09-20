import { useLoaderInstance } from "@tanstack/react-loaders";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { settingsUsersRoute } from "./route";

export const SettingsUsers = () => {
  const routeContext = settingsUsersRoute.useRouteContext();
  const users = useLoaderInstance(routeContext.loaderOptions).data;
  const navigate = useNavigate({ from: settingsUsersRoute.fullPath });
  const search = useSearch({ from: settingsUsersRoute.id });

  return (
    <div>
      <h3>Filters:</h3>
      <label htmlFor="name">Filter by name:</label>
      <input
        type="search"
        list="names"
        name="name"
        id="name"
        defaultValue={search.username}
        onChange={(e) => {
          navigate({
            to: settingsUsersRoute.fullPath,
            search: {
              username: e.target.value,
            },
          });
        }}
      />

      <datalist id="names">
        {users.map((user) => (
          <option key={user.id} value={user.username}></option>
        ))}
      </datalist>

      <h3>Users</h3>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
