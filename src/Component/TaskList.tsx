import { useState } from "react";
import type { Task } from "../types";
import TaskComponent from "./Task"
import './TaskList.css'




export default function TaskList() {

const [Tasks, setTasks] = useState<Task[]>([])
const [NewTask, setNewTask] = useState('')

function AddTask(name: string) {
    setTasks([...Tasks , {id: Date.now(), name: name}]);
    setNewTask('')
}

function EditTaskName(id: number, NewName: string) {

    setTasks(
        Tasks.map((task) => {
            if (task.id === id){
                return { ...task, name: NewName }
            }

        return task          
    }))
}

function DeleteTask(id: number) {

   setTasks(
    Tasks.filter((task) => task.id !== id)
   )
}

    return(
        <>

        <div className="input-row">
            <input type="text" value={NewTask} onChange={e => setNewTask(e.target.value)}  />
            <button onClick={() => AddTask(NewTask)}></button>
        </div>

        <ul>
            {Tasks.map((Task) => (
                <TaskComponent 
                     key={Task.id}
                    task={Task}
                    EditTaskName={EditTaskName}
                    DeleteTask={DeleteTask}
                />
            ))}
        </ul>
        </>
    )
}