// import styles from "./Score.module.css";

const Score = ({ score }) => {
  return (
    // <div className={styles.score}>
    <div className="score">
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
