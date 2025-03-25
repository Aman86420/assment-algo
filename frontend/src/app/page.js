import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => setTasks(res.data));
  }, []);

  const addTask = async () => {
    const res = await axios.post("http://localhost:5000/api/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Task"
        className="border p-2 rounded"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add</button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between border-b py-2">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task._id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
