import styles from "./ControlPanel.module.css";

export default function ControlPanel({ editing, setEditing, onDelete }) {
  return (
    <div className={styles.container}>
      <button
        className="btn"
        disabled={editing}
        onClick={() => setEditing(true)}
      >
        Edit <span className="material-symbols-outlined">edit_square</span>
      </button>
      <button
        className="btn"
        disabled={!editing}
        onClick={() => setEditing(false)}
      >
        End editing <span className="material-symbols-outlined">edit_off</span>
      </button>
      <button className="btn" onClick={onDelete}>
        Delete <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
