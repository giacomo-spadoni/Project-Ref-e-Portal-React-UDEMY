export default function SingleTask({ task, index, deleteTask }) {
  return (
    <div className="single-task">
      <div>{task}</div>
      <button onClick={() => deleteTask(index)}>Clear</button>
    </div>
  );
}
