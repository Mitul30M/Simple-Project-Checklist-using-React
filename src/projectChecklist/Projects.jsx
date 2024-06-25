import { useState, useRef, useEffect } from "react";
import { Button, Typography, Chip, IconButton } from "@material-tailwind/react";
import ProjectsDrawer from "./ProjectsDrawer";
import NewProjectForm from "./NewProjectForm";
import ProjectDetail from "./ProjectDetail";
import { v4 as uuid } from 'uuid';

// const initialProjects = [
//     {
//         id: uuid(),
//         name: "React E-commerce Site",
//         desc: "Develop a fully functional e-commerce site using React and Redux.",
//         dueDate: "2024-08-01",
//         tasks: [
//             {
//                 task_id: uuid(),
//                 task_desc: "Set up project structure",
//                 isCompleted: true
//             },
//             {
//                 task_id: uuid(),
//                 task_desc: "Implement product listing page",
//                 isCompleted: false
//             },
//             {
//                 task_id: uuid(),
//                 task_desc: "Integrate payment gateway",
//                 isCompleted: false
//             }
//         ]
//     }
// ];

const getIntialData = () => {
    const data = JSON.parse(localStorage.getItem('projects'));
    if (!data) return [];
    return data;
};


export default function Projects() {
    const drawerRef = useRef(null);

    const [projects, setProjects] = useState(getIntialData);
    const [active, setActive] = useState(null);
    const [viewForm, setViewForm] = useState(false);

    useEffect(() => {
        localStorage.setItem(
            'projects',
            JSON.stringify(projects)
        )
    }, [projects])

    const addNewProjects = (newProject) => {
        setProjects(prev => [...prev, newProject]);
    };

    const deleteProject = (id) => {
        setProjects(prevProject => {
            return prevProject.filter(project => project.id !== id);
        })
    }

    const selectProject = (idx) => {
        setActive(projects[idx]);
    }

    const unselectProject = () => {
        setActive(null);
    }

    const addTask = (projectId, desc) => {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    return {
                        ...project,
                        tasks: [...project.tasks, {
                            task_id: uuid(),
                            task_desc: desc,
                            isCompleted: false
                        }]
                    };
                }
                return project;
            });
        });

        setActive(prevProject => {
            return {
                ...prevProject,
                tasks: [...prevProject.tasks, {
                    task_id: uuid(),
                    task_desc: desc,
                    isCompleted: false
                }]
            }
        })
    }

    const toggleTask = (projectId, taskId) => {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    return {
                        ...project,
                        tasks: project.tasks.map(task => {
                            if (task.task_id === taskId) {
                                return { ...task, isCompleted: !task.isCompleted };
                            }
                            return task;
                        })
                    };
                }
                return project;
            });
        });

        setActive(prevProject => {
            return {
                ...prevProject,
                tasks: prevProject.tasks.map(task => {
                    if (task.task_id === taskId) {
                        return { ...task, isCompleted: !task.isCompleted };
                    }
                    return task;
                })
            }
        })
    };

    const deleteTask = (projectId, taskId) => {
        setProjects(prevProjects => {
            return prevProjects.map(project => {
                if (project.id === projectId) {
                    return {
                        ...project,
                        tasks: project.tasks.filter(task => task.task_id !== taskId)
                    };
                }
                return project;
            });
        });

        setActive(prevProject => {
            return {
                ...prevProject,
                tasks: prevProject.tasks.filter(task => task.task_id !== taskId)
            }
        })
    };


    return (
        <div className='flex flex-col items-center gap-3 mt-8 px-3 py-10 m-auto min-h-[250px] w-[500px] antialiased rounded-md bg-deep-purple-50'>
            {(!active && !viewForm) ? (
                <div className="flex flex-col w-full text-center justify-center items-center p-12 gap-4">
                    <Chip variant="ghost" value="No Project Selected" color="deep-purple" size="lg" />
                    <Typography variant="paragraph" className="text-sm font-medium text-deep-purple-800">
                        Select an Existing Project or Create a New One
                    </Typography>
                    <div className="flex flex-row gap-3 mt-4 w-max">
                        <ProjectsDrawer projects={projects} ref={drawerRef} viewForm={() => { setViewForm(true) }} selectProject={selectProject} deleteProject={deleteProject} />
                        <Button
                            variant="text"
                            color="deep-purple"
                            className="w-fit"
                            size="sm"
                            onClick={() => setViewForm(true)}
                        >
                            + New Project
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="w-full flex justify-center items-center">
                    {viewForm ? (
                        <NewProjectForm
                            className="flex flex-col gap-4"
                            addNewProjects={(newProject) => {
                                addNewProjects(newProject);
                                setViewForm(false);
                            }}
                            hideForm={() => setViewForm(false)}
                        />
                    ) : (
                        <ProjectDetail activeProject={active} unselectProject={unselectProject} toggleTask={toggleTask} deleteTask={deleteTask} addTask={addTask} />
                    )}
                </div>
            )}
        </div>
    );
}
