import styles from "./NoTasks.module.scss";

import clipoardIcon from "../assets/clipboard-icon.svg";

export function NoTasks() {
  return (
  <div className={styles.noTasks}>
    <div className={styles.container}>
      <img src={clipoardIcon} alt="Prancheta" />
      <div className={styles.paragraphs}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  </div>);
}