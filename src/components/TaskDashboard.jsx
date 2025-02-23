import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Tablero de gestión de tareas
const TaskDashboard = () => {
  // Estado para las tareas y el filtro actual
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  // Función para agregar una nueva tarea
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para eliminar una tarea existente
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Función para editar una tarea con nuevos datos
  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  // Función para alternar el estado de completado de una tarea
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtra las tareas según el criterio seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.category === filter;
  });

  const quotes = [
    "Keep going, you're doing great!",
    "One task at a time, one step closer.",
    "Success is the sum of small efforts repeated.",
    "Believe you can and you're halfway there.",
  ];
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Componente TaskForm: Permite al usuario agregar una nueva tarea
  const TaskForm = () => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    // Maneja el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      const newTask = {
        id: Date.now(),
        text,
        category,
        completed: false,
      };
      addTask(newTask);
      setText("");
      setCategory("");
    };

    return (
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </div>
      </form>
    );
  };

  // Componente Filter: Permite filtrar tareas por categoría
  const Filter = () => {
    // Deriva las categorías únicas de las tareas
    const categories = [
      ...new Set(tasks.map((task) => task.category).filter(Boolean)),
    ];

    return (
      <div className="mb-3">
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    );
  };

  // Componente TaskItem: Renderiza una tarea individual
  const TaskItem = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    const [editedCategory, setEditedCategory] = useState(task.category);

    // Maneja el envío del formulario de edición
    const handleEditSubmit = (e) => {
      e.preventDefault();
      if (!editedText.trim()) return;
      const updatedTask = {
        ...task,
        text: editedText,
        category: editedCategory,
      };
      editTask(task.id, updatedTask);
      setIsEditing(false);
    };

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="w-100 me-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={editedCategory}
                onChange={(e) => setEditedCategory(e.target.value)}
              />
              <button className="btn btn-success" type="submit">
                Save
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              {task.category && (
                <span className="badge bg-info ms-2">{task.category}</span>
              )}
            </div>
            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => toggleTaskCompletion(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
            </div>
          </>
        )}
      </li>
    );
  };

  // Componente TaskList: Renderiza la lista de tareas
  const TaskList = () => {
    return (
      <ul className="list-group">
        {filteredTasks.length === 0 ? (
          <li className="list-group-item">No tasks available.</li>
        ) : (
          filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </ul>
    );
  };

  // ---------- Renderizar el Dashboard  ----------
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "90%",
          maxWidth: "600px",
          background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        }}
      >
        <h2 className="text-center mb-4">Task Management Dashboard</h2>
        <TaskForm />
        <Filter />
        <TaskList />
        {quote && (
          <div className="alert alert-info mt-3 text-center" role="alert">
            {quote}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
