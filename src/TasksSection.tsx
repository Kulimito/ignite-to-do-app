import { NoTasks } from "./NoTasks";
import { Task } from "./Task";

import styles from "./TasksSection.module.scss";

import {
  TaskListType,
  setNewTasksType,
  setTaskCheckedCounterType,
} from "./types";

interface TasksSectionProps {
  handlers: [
    tasks: TaskListType,
    setNewTasks: setNewTasksType,
    taskCheckedCounter: number,
    setTaskCheckedCounter: setTaskCheckedCounterType
  ];
}

export function TasksSection({
  handlers: [tasks, setNewTasks, taskCheckedCounter, setTaskCheckedCounter],
}: TasksSectionProps) {
  const numberOfTaks = tasks.length;

  const isTasksListEmpty = numberOfTaks === 0;

  return (
    <section className={styles.tasksSection}>
      <header>
        <div>
          Tarefas criadas <span>{numberOfTaks}</span>
        </div>
        <div>
          Concluídas <span>{`${taskCheckedCounter} de ${numberOfTaks}`}</span>
        </div>
      </header>
      <main>
        {isTasksListEmpty ? (
          <NoTasks />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              handlers={[task, setNewTasks, setTaskCheckedCounter]}
            />
          ))
        )}
      </main>
    </section>
  );
}
