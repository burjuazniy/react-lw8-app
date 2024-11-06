import styles from './Aside.module.css'

import UsersList from './components/usersList/UsersList'
import UserManageForm from '../userManageForm/UserManageForm'

export default function Aside() {
    return (
        <aside className={styles.container}>
            <details>
                <summary>Create new user</summary>
                <UserManageForm />
            </details>
            <UsersList />
        </aside>
    )
}