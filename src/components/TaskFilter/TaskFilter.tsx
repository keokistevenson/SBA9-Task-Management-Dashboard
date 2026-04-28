import { useState } from "react";
import type { FilterProps, TaskPriority, TaskStatus, SortOption } from "../../types";


function TaskFilter({ onFilterChange }: FilterProps) {
    const [searchText, setSearchText] = useState("");

    return (
        <section>
            <h2>Filter Tasks</h2>

            <input
                type="text"
                placeholder="Search tasks"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    onFilterChange({ searchText: e.target.value });
                }}
            />

            <select
                onChange={(e) =>
                    onFilterChange({
                        status: e.target.value === "" ? undefined : e.target.value as TaskStatus
                    })
                }
            >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <select
                onChange={(e) =>
                    onFilterChange({
                        priority: e.target.value === "" ? undefined : e.target.value as TaskPriority
                    })
                }
            >
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>


            <select
                onChange={(e) =>
                    onFilterChange({
                        sortBy: e.target.value as SortOption
                    })
                }
            >
                <option value="">No Sort</option>
                <option value="dueDate">Due Date</option>
                <option value="priority">Priority</option>
                <option value="createdDate">Created Date</option>
            </select>
        </section>
    );
}

export default TaskFilter;