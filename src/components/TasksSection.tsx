import { NoTasks } from "./NoTasks";
import { Task } from "./Task";

import styles from "./TasksSection.module.scss";

import { TaskListType, setNewTasksType } from "./types";

interface TasksSectionProps {
  handlers: [tasks: TaskListType, setNewTasks: setNewTasksType];
}

export function TasksSection({
  handlers: [tasks, setNewTasks],
}: TasksSectionProps) {
  const numberOfTaks = tasks.length;

  const numberOfCheckedTasks = tasks.reduce(
    (counter, task) => (task.checked ? counter + 1 : counter),
    0
  );

  const isTasksListEmpty = numberOfTaks === 0;

  return (
    <section className={styles.tasksSection}>
      <header>
        <div>
          Tarefas criadas <span>{numberOfTaks}</span>
        </div>
        <div>
          Concluídas <span>{`${numberOfCheckedTasks} de ${numberOfTaks}`}</span>
        </div>
      </header>
      <main>
        {isTasksListEmpty ? (
          <NoTasks />
        ) : (
          tasks.map((task) => (
            <Task key={task.id} handlers={[task, setNewTasks]} />
          ))
        )}
      </main>
    </section>
  );
}
