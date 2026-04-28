import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import type { Task, Filter, TaskStatus } from "../../types";

function Dashboard() {
    // Application state for all tasks.
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filters, setFilters] = useState<Filter>({});  // Stores selected search, filter, and sort criteria.

    const handleAddTask = (newTask: Task) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    // Merge updated filter selections into current filters.
    const handleFilterChange = (newFilters: Filter) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            ...newFilters,
        }));
    };

    const handleDelete = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        );
    };

    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    // Apply search and filter criteria before showing tasks.
    const filteredTasks = tasks.filter(task => {
        const statusPasses = !filters.status || task.status === filters.status;
        const priorityPasses = !filters.priority || task.priority === filters.priority;

        const searchPasses =
            !filters.searchText ||
            task.title.toLowerCase().includes(filters.searchText.toLowerCase()) ||
            task.description?.toLowerCase().includes(filters.searchText.toLowerCase());

        return statusPasses && priorityPasses && searchPasses;
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (filters.sortBy === "dueDate") {
            return (a.dueDate || "").localeCompare(b.dueDate || "");
        }

        if (filters.sortBy === "createdDate") {
            return a.createdDate.localeCompare(b.createdDate);
        }

        if (filters.sortBy === "priority") {
            const priorityRank = {
                high: 1,
                medium: 2,
                low: 3,
            };

            return priorityRank[a.priority] - priorityRank[b.priority];
        }

        return 0;
    });

    return (
        <main>
            <h1>Task Dashboard</h1>

            <TaskForm onAddTask={handleAddTask} />

            <TaskFilter onFilterChange={handleFilterChange} />

            <TaskList
                tasks={sortedTasks}
                onStatusChange={handleStatusChange}
                onDelete={handleDelete}
            />
        </main>
    );
}

export default Dashboard;