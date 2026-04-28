import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {

    return (
        <section>
            {tasks.map((task) => (<TaskItem
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete} />))}
        </section>
    );
}

export default TaskList;