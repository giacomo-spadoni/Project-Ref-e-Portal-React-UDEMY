import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";

import { useRef } from "react";
import { useState } from "react";

function App() {
  const [selectedProject, setSelectedProject] = useState("Project");
  const [projects, setProjects] = useState([
    {
      title: "Project",
      date: "Dec 29, 2024",
      tasks: ["Bla Tra Task", "Bla Pla Task", "Bla Cla Task"],
      description: "fake description",
    },
    {
      title: "Second Project",
      date: "Dec 31, 2024",
      tasks: ["Dla Bla Task", "Mla Bla Task", "Wla Bla Task"],
      description: "fake description",
    },
  ]);
  const dialog = useRef();
  const task = useRef();

  // let actualProject;
  let actualProject = [projects[0], 0];

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  function handleCreateClick() {
    dialog.current.open();
  }

  function handleAddProject() {
    const newProjectTitle = dialog.current.createTitle();
    const newProjectDescription = dialog.current.createDescription();
    const now = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = now.toLocaleDateString("en-US", options);
    if (newProjectTitle) {
      setProjects((prevProjects) => [
        ...prevProjects,
        {
          title: newProjectTitle,
          date: formattedDate,
          tasks: [],
          description: newProjectDescription,
        },
      ]);
      setSelectedProject(newProjectTitle);
    }
    dialog.current.close();
  }

  function handleDeleteProject() {
    const [objectProject, indexProject] = findProject();
    if (indexProject === 0 || indexProject) {
      if (projects[indexProject + 1]) {
        setSelectedProject(projects[indexProject + 1].title);
      } else {
        setSelectedProject(projects[indexProject - 1].title);
      }
      const updateProject = [...projects];
      updateProject.splice(indexProject, 1);
      setProjects(updateProject);
    }
  }

  function handleCreateTask() {
    const newTask = task.current.value;
    const [objectProject, indexProject] = findProject();
    const updateProject = [...projects];
    updateProject[indexProject].tasks.push(newTask);
    setProjects(updateProject);
  }

  function handleDeleteTask(i) {
    const [objectProject, indexProject] = findProject();
    const updateProject = [...projects];
    updateProject[indexProject].tasks.splice(i, 1);
    setProjects(updateProject);
  }

  function findProject() {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title == selectedProject) {
        actualProject = [projects[i], i];
        actualProject = [projects[i], i];
        return actualProject;
      }
    }
  }

  return (
    <div className="container">
      <CreateProject ref={dialog} newProject={handleAddProject} />
      <Dashboard
        projects={projects}
        project={selectedProject}
        selectProject={handleProjectClick}
        createProject={handleCreateClick}
      />
      <Projects
        ref={task}
        project={findProject()}
        deleteProject={() => handleDeleteProject(actualProject[1])}
        createTask={handleCreateTask}
        deleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
