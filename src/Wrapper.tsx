import styles from "./Wrapper.module.scss";
import { childrenProps } from "./props";

export function Wrapper({ children }: childrenProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
