import styles from "./Task.module.scss";

import { Trash } from "phosphor-react";

import { TaskType, setNewTasksType } from "./types";

interface TaskProps {
  handlers: [task: TaskType, setNewTasks: setNewTasksType];
}

export function Task({ handlers: [task, setNewTasks] }: TaskProps) {
  const isTaskChecked = task.checked;

  function onClickCheckHandler() {
    setNewTasks((previousTaskList) => {
      const updatedTask = { ...task, checked: !task.checked };

      const indexOfTaskToUpdate = previousTaskList.findIndex(
        (taskItem) => taskItem.id === task.id
      );

      const updatedTaskList = [...previousTaskList];
      updatedTaskList[indexOfTaskToUpdate] = updatedTask;

      return updatedTaskList;
    });
  }

  function onClickDeleteTaskHandler() {
    setNewTasks((previousTaskList) =>
      previousTaskList.filter((taskItem) => taskItem.id !== task.id)
    );
  }

  return (
    <div className={styles.task}>
      {isTaskChecked ? (
        <button
          className={styles.checkButtonChecked}
          onClick={onClickCheckHandler}
        >
          <span>
            <span></span>
          </span>
        </button>
      ) : (
        <button className={styles.checkButton} onClick={onClickCheckHandler}>
          <span></span>
        </button>
      )}

      <p className={isTaskChecked ? styles.crossOutText : ""}>{task.content}</p>
      <button
        className={styles.deleteButton}
        onClick={onClickDeleteTaskHandler}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
