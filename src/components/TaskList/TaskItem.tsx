import type { TaskItemProps, TaskStatus } from "../../types";


// Displays task and provides controls for updating status or deleting the task.
function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    return (
        <article >
            <header><h2>{task.title}</h2>
                <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)} aria-label="Task status">
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>

            <button type="button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>Delete</button>
            </header>

            <p>{task.description}</p>
            <footer><span>Priority: {task.priority}</span><span>Due: {task.dueDate}</span></footer>
        </article>

    );

}

export default TaskItem;