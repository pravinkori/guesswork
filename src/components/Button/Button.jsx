import styles from "./Button.module.css";

function Button({ disabled, handleSubmit, children }) {
  return (
    <button
      className={styles.pushable}
      disabled={disabled}
      onClick={handleSubmit}
    >
      <span className={styles.shadow}></span>
      <span className={styles.edge}></span>
      <span className={styles.front}>{children}</span>
    </button>
  );
}

export default Button;
