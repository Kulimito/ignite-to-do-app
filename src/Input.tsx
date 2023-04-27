import { useState, ChangeEvent, KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./Input.module.scss";

import { setNewTaskType, setNewTasksType } from "./types";

interface InputProps {
  handlers: [
    newTask: string,
    setNewTask: setNewTaskType,
    setNewTasks: setNewTasksType
  ];
}

export function Input({
  handlers: [newTask, setNewTask, setNewTasks],
}: InputProps) {
  const [isInputValid, setIsInputValid] = useState<boolean>(false);

  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setIsInputValid(true);
    setNewTask(e.target.value);
  }

  function addNewTaskHandker() {
    setNewTasks((tasks) => {
      return [...tasks, { id: uuidv4(), checked: false, content: newTask }];
    });
    setNewTask("");
    setIsInputValid(false);
  }

  function onEnterKeyPressAddNewTaskHandler(
    e: KeyboardEvent<HTMLInputElement>
  ) {
    e.key === "Enter" && isInputValid ? addNewTaskHandker() : null;
  }

  return (
    <div className={styles.dataInput}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        onChange={onInputHandler}
        onKeyDown={onEnterKeyPressAddNewTaskHandler}
        value={newTask}
      />
      <button onClick={addNewTaskHandker} disabled={!isInputValid}>
        Criar
        <div className={styles.container}>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  );
}
