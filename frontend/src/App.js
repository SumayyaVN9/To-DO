import { useState } from "react";
import "./App.css";

function App(){
  const[tasks,setTasks] = useState([]);
  const[title,setTitle] =useState("");

  const addTask = () => {   //ADD
    if(title.trim() === "") return;
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      const newTask = {id: newId,title,status:"ToDo"};
    setTasks([...tasks,newTask]);
    setTitle("");
  }
  
    const toggleStatus = (index) => {
      const update=[...tasks];
      const current = update[index].status;
       if(current === "pending") update[index].status= "In progress";
       else if(current === "In progress") update[index].status = "Done";
       else update[index].status= "pending"
    }

    const deleteTask = (index) => {                     //delete
      const update = tasks.filter((_, i) => i != index);
      setTasks(update);
    }
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
                <td>{task.title}</td>
                <td onClick={() => toggleStatus(index)}>
                  <span className={`status ${task.status.toLowerCase()}`}>{task.status} </span>
                </td>
                <td><button>✏️</button></td>
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



