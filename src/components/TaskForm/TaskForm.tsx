import { useState } from "react";
import type { Task, TaskPriority } from "../../types";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}


function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  // Validate input and create a new task object before sending it to the Dashboard.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: "pending",
      priority,
      dueDate,
      createdDate: new Date().toISOString(),
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>

      <input
        type="text"
        value={title}
        placeholder="Task title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        value={description}
        placeholder="Task description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {error && <p>{error}</p>}

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;