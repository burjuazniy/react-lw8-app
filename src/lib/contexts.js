import { createContext } from "react";

export const UsersContext = createContext({
  users: [],
  setUsers: null,
  currentUserId: null,
  setCurrentUserId: null,
});
