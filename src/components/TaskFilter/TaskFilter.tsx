import type { FilterProps, TaskStatus, TaskPriority } from "../../types"

function TaskFilter({ onFilterChange }: FilterProps) {

    return <header>
        <label htmlFor="TaskStatusFilter">Status</label>
        <select id="TaskStatusFilter" onChange={(e) => onFilterChange({status: e.target.value === "" ? undefined : e.target.value as TaskStatus})}>
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
        </select>

        <label  htmlFor="TaskPriorityFilter">Priority</label>
        <select id="TaskPriorityFilter" onChange={(e) => onFilterChange({priority: e.target.value === "" ? undefined : e.target.value as TaskPriority})}>
            <option value="">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>

    </header>;
}

export default TaskFilter;