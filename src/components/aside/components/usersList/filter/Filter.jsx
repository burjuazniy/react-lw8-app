import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../../../lib/contexts";

export default function Filter({ setFilteredUsers }) {
  const { users } = useContext(UsersContext);
  const [userData, setUserData] = useState({
    id: null,
    name: "",
    position: "",
    yearsExp: null,
    email: "",
  });

  useEffect(() => {
    const filteredUsers = users.filter((user) => {
      return Object.keys(userData).every((key) => {
        const filterValue = userData[key];
        const userValue = user[key];

        if (!filterValue) return true;

        if (key === "id") {
          // If selected id, find exactly this id
          return Number(userValue) === Number(filterValue);
        } else if (key === "yearsExp") {
          // More than selected years of experience
          return Number(userValue) >= Number(filterValue);
        } else if (typeof userValue === "string") {
          // Starts with selected substring
          return userValue.toLowerCase().startsWith(filterValue.toLowerCase());
        }
        return true;
      });
    });

    setFilteredUsers(filteredUsers);
  }, [userData, users, setFilteredUsers]);

  return (
    <form className="form">
      <label>
        ID
        <input
          type="number"
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              id: e.target.value ? Number(e.target.value) : null,
            }))
          }
        />
      </label>
      <label>
        Name
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </label>
      <label>
        Position
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, position: e.target.value }))
          }
        />
      </label>
      <label>
        Years of exp. (more than)
        <input
          type="number"
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              yearsExp: e.target.value ? parseInt(e.target.value, 10) : null,
            }))
          }
        />
      </label>
      <label>
        Email
        <input
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </label>
    </form>
  );
}
