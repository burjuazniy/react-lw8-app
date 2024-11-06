// Component for updating and creating users

import { useState, useEffect, useContext, useMemo } from "react";
import { createUser, retrieveUser, updateUser } from "../../lib/crud";
import { UsersContext } from "../../lib/contexts";

export default function UserManageForm({ changeUserId = null }) {
  const { users, setUsers } = useContext(UsersContext);
  const [userData, setUserData] = useState(null);

  const defaultUserData = useMemo(
    () => ({
      id: null,
      name: "",
      position: "",
      yearsExp: 0,
      about: "",
      email: "",
    }),
    []
  );

  useEffect(() => {
    if (changeUserId !== null) {
      // existing value, updating existing user
      const user = retrieveUser(users, changeUserId);
      setUserData(user ? user : defaultUserData)
    } else {
      // default value, new user creation
      setUserData(defaultUserData);
    }
  }, [changeUserId, defaultUserData, users]);

  const processUser = (e) => {
    e.preventDefault();

    if (userData.id === null) {
      createUser(setUsers, userData);
      setUserData(defaultUserData);
    } else {
      updateUser(setUsers, userData);
    }
  };

  return userData ? (
    <form onSubmit={processUser} className="form">
      <label>
        Name
        <input
          id="name"
          type="text"
          placeholder="John H."
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
      </label>
      <label>
        Position
        <input
          type="text"
          placeholder="CEO"
          value={userData.position}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, position: e.target.value }))
          }
          required
        />
      </label>
      <label>
        Years of experience
        <input
          type="number"
          placeholder="5"
          value={userData.yearsExp}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, yearsExp: e.target.value }))
          }
          required
        />
      </label>
      <label>
        About
        <textarea
          type="text"
          placeholder="Cool guy"
          value={userData.about}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, about: e.target.value }))
          }
          required
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          placeholder="johnh@company.com"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
      </label>

      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  ) : null;
}