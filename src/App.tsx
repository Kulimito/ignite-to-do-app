import "./global.scss";

import styles from "./App.module.scss";

import rocketIcon from "./assets/rocket-icon.svg";

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <img src={rocketIcon} alt="Rocket Icon" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </header>
      <section>Another</section>
    </div>
  );
}

export default App;
