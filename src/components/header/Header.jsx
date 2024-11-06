import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.brandName}>Company Web</h1>
            <span className="material-symbols-outlined" style={{ marginInlineStart: '.5rem' }}>groups</span>
        </header>
    )
}