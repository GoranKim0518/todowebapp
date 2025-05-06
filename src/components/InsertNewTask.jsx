import { useState } from "react";

export default function InsertNewTask({ onAddTask }) {
    const [newTask, setNewTask] = useState("");

    function handleInputChange(taskValue) {
        setNewTask(taskValue);
    }

    function handleNewTask() {
        if(newTask.trim().length === 0) return;
        onAddTask(newTask);     //transport newTask to upper level; AddTask.jsx
        setNewTask("");     //init newTask as it only functions transporting 'newly inserted' task
        console.log(newTask);
    }

    return(
        <div>
            <input type="text" placeholder="Enter a new Task" value={newTask} onChange={(event) => handleInputChange(event.target.value)}></input>
            <button onClick={handleNewTask}>submit</button>
        </div>
    );
}