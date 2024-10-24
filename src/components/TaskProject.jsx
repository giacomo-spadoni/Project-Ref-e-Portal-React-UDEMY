import SingleTask from "./SingleTask";
import { useEffect, forwardRef } from "react";

const TaskProject = forwardRef(({ tasks, createTask, deleteTask }, ref) => {
  const taskList = tasks.map((task, key) => {
    return (
      <li key={key}>
        <SingleTask index={key} task={task} deleteTask={deleteTask} />
      </li>
    );
  });
  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      <div className="new-task">
        <input ref={ref} type="text" />
        <button onClick={createTask}>Add Task</button>
      </div>
      <div className="task-container">{taskList}</div>
    </div>
  );
});
export default TaskProject;
