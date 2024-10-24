export default function TitleProject({
  title,
  description,
  date,
  deleteProject,
}) {
  return (
    <>
      <div className="title-container">
        <div className="project-title">
          <h1>{title}</h1>
          <p className="date">{date}</p>
          <p>{description}</p>
        </div>
        <button onClick={deleteProject} className="project-delete">
          Delete
        </button>
      </div>
    </>
  );
}
