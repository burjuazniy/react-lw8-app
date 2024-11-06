import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";

import { UsersContext } from "./lib/contexts";
import usersDb from "./lib/users.json";

function App() {
  const [users, setUsers] = useState(usersDb);
  const [currentUserId, setCurrentUserId] = useState(null);

  return users ? (
    <UsersContext.Provider
      value={{
        users: users,
        setUsers: setUsers,
        currentUserId: currentUserId,
        setCurrentUserId: setCurrentUserId,
      }}
    >
      <div className="container">
        <Header />
        <div className={styles.mainAsideContainer}>
          <Aside />
          <Main />
        </div>
      </div>
    </UsersContext.Provider>
  ) : null;
}

export default App;
