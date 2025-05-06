import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//dummy tasks; It will be replaced with backend API.
const dumyTasks = [
    {id: 1, task: "Learn React"},
    {id: 2, task: "Make To-Do app"},
    {id: 3, task: "Test the application"},
]

export default function AddTask() {
    function handleClick(event) {
        console.log(event);
    }
    return(
        <div>
            <button onClick={(event) => handleClick(event)}>
                <FontAwesomeIcon icon={faPlus} />
                <p>What's your focus for today?</p>
            </button>
            {dumyTasks.map((item) => <li key={item.id}>{item.task}</li>)}
        </div>
    );
}