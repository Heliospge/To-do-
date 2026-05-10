// Le type qui représente une tâche (juste les données)
export interface Task {
  // à toi de mettre les propriétés
  id: number;
  name: string;
}

// Le type des props du composant Task
export interface TaskProps {
  task: Task        // au lieu de répéter id et nameTask séparément
  EditTaskName: (id: number, newName: string) => void
  DeleteTask: (id: number) => void// à toi de compléter la signature
}