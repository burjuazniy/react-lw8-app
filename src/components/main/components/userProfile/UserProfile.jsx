import { useState, useEffect, useContext } from "react";
import styles from "./UserProfile.module.css";
import { UsersContext } from "../../../../lib/contexts";

export default function UserProfile({ userId }) {
  const { users } = useContext(UsersContext);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (users && userId) {
      setUserData(users.find((el) => userId === el.id));
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
