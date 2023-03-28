import { ITasks } from "../../contexts/adminContext";

const TaskCard = (task: ITasks) => {
  return (
    <li>
      <span>{task.task}</span>
      <input type="checkbox" />
    </li>
  );
};

export default TaskCard;
