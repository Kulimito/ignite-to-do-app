import { useState } from "react";

import "./global.scss";

import styles from "./App.module.scss";

import { Header } from "./Header";
import { Section } from "./Section";
import { Wrapper } from "./Wrapper";
import { Input } from "./Input";
import { TasksSection } from "./TasksSection";

import { TaskListType } from "./types";

export function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setNewTasks] = useState<TaskListType>([]);
  const [taskCheckedCounter, setTaskCheckedCounter] = useState<number>(0);

  return (
    <div className={styles.app}>
      <Header />
      <Section>
        <Wrapper>
          <Input handlers={[newTask, setNewTask, setNewTasks]} />
          <TasksSection
            handlers={[
              tasks,
              setNewTasks,
              taskCheckedCounter,
              setTaskCheckedCounter,
            ]}
          />
        </Wrapper>
      </Section>
    </div>
  );
}

export default App;
