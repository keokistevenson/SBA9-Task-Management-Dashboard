import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import type { Task, Filter, TaskStatus } from "../../types";

function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<Filter>({});

  const handleAddTask = (newTask: Task) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

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

  const filteredTasks = tasks.filter(task => {
    const statusPasses = !filters.status || task.status === filters.status;
    const priorityPasses = !filters.priority || task.priority === filters.priority;

    return statusPasses && priorityPasses;
  });

  return (
    <main>
      <h1>Task Dashboard</h1>

      <TaskForm onAddTask={handleAddTask} />

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default Dashboard;