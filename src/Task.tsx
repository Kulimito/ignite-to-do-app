import styles from "./Task.module.scss";

import { useState } from "react";

import { Trash } from "phosphor-react";

import { TaskType, setNewTasksType, setTaskCheckedCounterType } from "./types";

interface TaskProps {
  handlers: [
    task: TaskType,
    setNewTasks: setNewTasksType,
    setTaskCheckedCounter: setTaskCheckedCounterType
  ];
}

export function Task({ handlers: [task, setNewTasks, setTaskCheckedCounter] } : TaskProps) {
  const [isTaskChecked, setIsTaskChecked] = useState<boolean>(false);

  function onClickCheckHandler() {
    setIsTaskChecked((previousState) => !previousState);
    setTaskCheckedCounter((counter) =>
      isTaskChecked ? counter - 1 : counter + 1
    );
  }

  function onClickDeleteTaskHandler() {
    setTaskCheckedCounter((counter) => (isTaskChecked ? counter - 1 : counter));
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
