import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddTask() {
    function handleClick(event) {
        console.log(event);
    }
    return(
        <button onClick={(event) => handleClick(event)}>
            <FontAwesomeIcon icon={faPlus} />
            What's your focus for today?
        </button>
    );
}