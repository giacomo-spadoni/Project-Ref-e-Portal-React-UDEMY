export default function Dashboard({
  createProject,
  projects,
  project,
  selectProject,
}) {
  const projectList = projects.map((singleProject, key) => {
    return (
      <li
        key={key}
        className={project == singleProject.title ? "selected" : ""}
        onClick={() => selectProject(singleProject.title)}
      >
        {singleProject.title}
      </li>
    );
  });

  return (
    <>
      <section className="dashboard-container">
        <div>YOUR PROJECT</div>
        <button onClick={createProject} className="button-project">
          + Add Project
        </button>
        <ul>{projectList}</ul>
      </section>
    </>
  );
}
