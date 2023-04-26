import "./global.scss";

import styles from "./App.module.scss";

import { Header } from "./Header";
import { Section } from "./Section";
import { Wrapper } from "./Wrapper";
import { Input } from "./Input";
import { TasksSection } from "./TasksSection";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Section>
        <Wrapper>
          <Input />
          <TasksSection />
        </Wrapper>
      </Section>
    </div>
  );
}

export default App;
