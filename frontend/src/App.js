import { useState } from "react";
import "./App.css";

function App(){
  const[tasks,setTasks] = useState([]);
  const[title,setTitle] =useState("");
  const[editTitle, setEditTitle] = useState("");
  const[editIndex,setEditIndex] = useState(null)

  const addTask = () => {   //ADD
    if(title.trim() === "") return;
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      const newTask = {id: newId,title,status:"ToDo"};
    setTasks([...tasks,newTask]);
    setTitle("");
  }
  
      const handleStatusChange = (index, newStatus) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].status = newStatus;
      setTasks(updatedTasks);
    };

    const deleteTask = (index) => {                     //delete
      const update = tasks.filter((_, i) => i != index);
      setTasks(update);
    };

    const startEditing = (index) => {
    setEditIndex(index);
    setEditTitle(tasks[index].title);
  };

    const saveEdit = (index) => {
    const updated = [...tasks];
    updated[index].title = editTitle;
    setTasks(updated);
    setEditIndex(null);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      saveEdit(index);
    }
  };
  return(
    <div className="todo-container">
      <h1>MY TO-DO LIST</h1>
      <div className="input-section">
        
        <input type="text" placeholder="Enter New Task" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={addTask}>ADD TASK</button>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                  <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="edit-input"
                    autoFocus
                  />
                ) : (
                  task.title
                )}
              </td>
                <td>
                  <select
                    className="status-dropdown"
                    value={task.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                  >
                    <option value="ToDo">ToDo</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                  </select>
                </td>
                <td>
                {editIndex === index ? (
                  <button onClick={() => saveEdit(index)}>💾</button>
                ) : (
                  <button onClick={() => startEditing(index)}>✏️</button>
                )}
              </td>
                <td><button onClick={() => deleteTask(index)}>🗑️</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );

}
export default App;



