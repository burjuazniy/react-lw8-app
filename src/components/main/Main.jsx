import { useState, useContext } from 'react'

import styles from './Main.module.css'

import UserProfile from './components/userProfile/UserProfile'
import ControlPanel from './components/controlPanel/ControlPanel'
import UserManageForm from '../userManageForm/UserManageForm'
import { deleteUser } from '../../lib/crud'

import { UsersContext } from '../../lib/contexts'

export default function Main() {
    const { setUsers, currentUserId, setCurrentUserId } = useContext(UsersContext)
    const [editing, setEditing] = useState(false)

    const handleDeleteButtonClick = () => {
        deleteUser(setUsers, currentUserId)
        setCurrentUserId(null)
    }

    return (
        <main className={styles.container}>
            {currentUserId ? (
                <>
                    <ControlPanel editing={editing} setEditing={setEditing} onDelete={handleDeleteButtonClick}/>
                    {editing ? (
                        <UserManageForm changeUserId={currentUserId}/>
                    ) : (
                        <UserProfile userId={currentUserId} />
                    )}
                    
                </>
            ) : (
                <h2>Choose the user</h2>
            )}
        </main>
    )
}