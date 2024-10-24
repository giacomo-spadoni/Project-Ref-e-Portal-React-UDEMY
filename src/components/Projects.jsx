import TitleProject from "./TitleProject";
import TaskProject from "./TaskProject";

import { forwardRef } from "react";

const Projects = forwardRef(
  ({ project, deleteProject, createTask, deleteTask }, ref) => {
    const [singleProject, index] = project;
    return (
      <section className="projects-container">
        <TitleProject
          title={singleProject.title}
          description={singleProject.description}
          date={singleProject.date}
          deleteProject={deleteProject}
        />
        <hr />
        <TaskProject
          ref={ref}
          tasks={singleProject.tasks}
          createTask={createTask}
          deleteTask={deleteTask}
        />
      </section>
    );
  }
);

export default Projects;
