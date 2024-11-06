import { useState, useEffect, useContext } from "react";
import styles from "./UserProfile.module.css";
import { UsersContext } from "../../../../lib/contexts";
import { retrieveUser } from "../../../../lib/crud";

export default function UserProfile({ userId }) {
  const { users } = useContext(UsersContext);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (users && userId) {
      const user = retrieveUser(users, userId);
      setUserData(user);
    }
  }, [users, userId]);

  return userData ? (
    <section className={styles.container}>
      <h1 className={styles.main}>{userData.name}</h1>
      <h2 className={styles.position}>
        {userData.position},
        <small> {userData.yearsExp} years of experience</small>
      </h2>
      <p className={styles.about}>{userData.about}</p>
      <a href={`mailto:${userData.email}`} className={styles.email}>
        {userData.email}
      </a>
    </section>
  ) : null;
}
