export interface TaskType {
  id: string;
  content: string;
}

export interface TaskListType extends Array<TaskType> {}

export type setNewTaskType = React.Dispatch<React.SetStateAction<string>>;

export type setNewTasksType = React.Dispatch<
  React.SetStateAction<TaskListType>
>;
export type setTaskCheckedCounterType = React.Dispatch<
  React.SetStateAction<number>
>;


