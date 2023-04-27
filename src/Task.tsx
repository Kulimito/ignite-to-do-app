import styles from "./Task.module.scss";

import { Trash } from "phosphor-react";

export function Task() {
  return (
    <div className={styles.task}>
      {false ? (
        <button className={styles.checkButtonChecked}>
          <span>
            <span></span>
          </span>
        </button>
      ) : (
        <button className={styles.checkButton}>
          <span></span>
        </button>
      )}

      <p className={" " || styles.crossOutText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.deleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
