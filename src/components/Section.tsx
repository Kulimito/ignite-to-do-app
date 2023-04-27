import styles from "./Section.module.scss";
import { childrenProps } from "./props";

export function Section({ children }: childrenProps) {
  return <section className={styles.section}>{children}</section>;
}
