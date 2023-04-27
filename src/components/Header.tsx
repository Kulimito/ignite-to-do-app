import styles from "./Header.module.scss";

import rocketIcon from "../assets/rocket-icon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketIcon} alt="Rocket Icon" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
