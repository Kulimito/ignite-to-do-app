import plusIcon from "./assets/plus-icon.svg";

import styles from "./Input.module.scss";

export function Input() {
  return (
    <div className={styles.dataInput}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar
        <img src={plusIcon} alt="Plus Icon" />
        {/* Replace in the future */}
      </button>
    </div>
  );
}
