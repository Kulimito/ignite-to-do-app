import styles from "./Input.module.scss";

export function Input() {
  return (
    <div className={styles.dataInput}>
      <input type="text" placeholder="Adicionar uma nova tarefa" />
      <button>
        Criar
        <div className={styles.container}>
          <div></div>
          <div></div>
        </div>
      </button>
    </div>
  );
}
