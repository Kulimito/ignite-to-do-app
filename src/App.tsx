import { useState } from "react";

import "./global.scss";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Wrapper } from "./components/Wrapper";
import { Input } from "./components/Input";
import { TasksSection } from "./components/TasksSection";

import { TaskListType } from "./components/types";

export function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setNewTasks] = useState<TaskListType>([]);

  return (
    <>
      <Header />
      <Section>
        <Wrapper>
          <Input handlers={[newTask, setNewTask, setNewTasks]} />
          <TasksSection handlers={[tasks, setNewTasks]} />
        </Wrapper>
      </Section>
    </>
  );
}

export default App;
