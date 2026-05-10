 import { Pencil , Trash } from "lucide-react";
import type { TaskProps } from "../types.ts";
import './Task.css'
 


export default function Task({task, EditTaskName, DeleteTask }: TaskProps) {

    return (
        <div className="task-card">
            {task.name}
            <div className="task-buttons">
                <button className="edit-btn" onClick={() => EditTaskName(task.id, task.name)}><Pencil size={16} /></button>
                <button className="delete-btn" onClick={() => DeleteTask(task.id)}><Trash size={16} /></button>
            </div>
        </div>
    )
}