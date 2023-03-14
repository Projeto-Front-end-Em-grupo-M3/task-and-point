import { ITasks } from "../../contexts/AdminContext"

const TaskCard = (task: ITasks) => {
    return <li>
        <span>
            {
                task.task
            }
        </span>
        <input
            type="checkbox" 
        />
    </li>
}

export default TaskCard