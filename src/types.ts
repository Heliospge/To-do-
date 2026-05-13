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

export interface Food {
  id: number;
  name: string;
  quantité: number;
  calorieCal: number;

}

export interface FoodResult {
  product_name : string;
  nutriments: {
    'energy-kcal_100g': number
  }
}

export interface Meal {
  id: number;
  name: string;
  calorieMoy: number;

}
