import { ChangeEvent, FormEvent, InvalidEvent } from "react";
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
  function onInputHandler(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
    e.target.setCustomValidity("");
  }

  function onFormSubmitHandler(e: FormEvent) {
    e.preventDefault();

    const isTaskNotEmpty = newTask.trim().length > 0;

    isTaskNotEmpty &&
      setNewTasks((tasks) => {
        return [
          ...tasks,
          { id: uuidv4(), checked: false, content: newTask.trim() },
        ];
      });
    setNewTask("");
  }

  function handleNewTaskInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <form className={styles.dataInput} onSubmit={onFormSubmitHandler}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa"
        onChange={onInputHandler}
        value={newTask}
        required
        onInvalid={handleNewTaskInvalid}
      />
      <button type="submit">
        Criar
        <div className={styles.container}>
          <div></div>
          <div></div>
        </div>
      </button>
    </form>
  );
}
