import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import InsertNewTask from "./InsertNewTask";

export default function AddTask() {
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

    console.log(tasks);

    return(
        <div>
            <button onClick={(event) => handleClick(event)}>
                <FontAwesomeIcon icon={faPlus} />
                <p>What's your focus for today?</p>
            </button>
            {tasks.map((item) => <ul><li key={item.id}>{item.task}</li></ul>)}
            <InsertNewTask onAddTask={handleAddTask}/>
        </div>
    );
}