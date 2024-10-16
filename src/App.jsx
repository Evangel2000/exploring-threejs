import ThreeScene from "./ThreeScene";
import styles from "./App.module.css";

const App = () => {
  return (
    <section className={styles.threeSceneSection}>
      <div className={styles.container}>
        <ThreeScene />
        <div className={styles.controlsOptions}>
          <div className={styles.controlOption}>
            <p className={styles.optionTitle}>Colour</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
