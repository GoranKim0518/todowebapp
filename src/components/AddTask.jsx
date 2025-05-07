import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../store/TaskContext";

import InsertNewTask from "./InsertNewTask";

export default function AddTask() {
    const { cmpltTask, setCmpltTask } = useContext(TaskContext);

    const [tasks, setTasks] = useState([
        { id: 1, task: "Learn React" },
        { id: 2, task: "Make To-Do app" },
        { id: 3, task: "Test the application" },
    ]);

    function handleClick(event) {
        console.log(event);
    }

    //remain previous tasks while adding new task in array
    function handleAddTask(newTask) {
        const insertedTask = {id: tasks.length + 1, task: newTask};
        setTasks([...tasks, insertedTask]);
    }

    //if the check box checked, it looks up its id and match the value of it.
    //then add the value to completedTask's state.
    function handleCheckTask(taskId) {
        const taskToComplete = tasks.find((task) => task.id === taskId);
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setCmpltTask((prevTasks) => [...prevTasks, taskToComplete]);

    }

    console.log(tasks);

    return(
        <div>
            <div onClick={(event) => handleClick(event)}>
                <i className="fas fa-plus"></i>
                <p>What's your focus for today?</p>
            </div>
            {tasks.map((item) => 
            <ul key={item.id}>
                <div onClick={() => handleCheckTask(item.id)}>
                    <i className="fa-regular fa-square-check"></i>
                </div>
                <li>{item.task}</li>
            </ul>)}
            <InsertNewTask onAddTask={handleAddTask}/>
        </div>
    );
}