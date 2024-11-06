import { useContext, useState } from "react";
import styles from "./UsersList.module.css";
import Filter from "./filter/Filter";
import { UsersContext } from "../../../../lib/contexts";

export default function UsersList() {
  const { users, currentUserId, setCurrentUserId } = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState(users);

  return filteredUsers ? (
    <div>
      <details>
        {/* Spoiler with filter options */}
        <summary>Filter by</summary>
        <Filter setFilteredUsers={setFilteredUsers} />
      </details>
      <ul className={styles.list}>
        {filteredUsers.map((user) => {
          return (
            <li key={user.id}>
              {/* Button for every user */}
              <button
                className="btn"
                onClick={() => setCurrentUserId(user.id)}
                style={{
                  backgroundColor:
                    // Active color if this user is selected now
                    currentUserId == user.id ? "var(--btn-color-active)" : null,
                  width: "100%",
                }}
              >
                {user.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
}
