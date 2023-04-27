import { NoTasks } from "./NoTasks";
import { Task } from "./Task";
import styles from "./TasksSection.module.scss";

export function TasksSection() {
  return (
    <section className={styles.tasksSection}>
      <header>
        <div>
          Tarefas criadas <span>0</span>
        </div>
        <div>
          Concluídas <span>0</span>
        </div>
      </header>
      <main>{true ? <Task /> : <NoTasks />}</main>
    </section>
  );
}
