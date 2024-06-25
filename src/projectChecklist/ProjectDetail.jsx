import { Button, Typography, Chip, IconButton, List } from "@material-tailwind/react";
import TaskItem from "./TaskItem";
import NewTaskItem from "./NewTaskItem";
export default function ProjectDetail({ activeProject, unselectProject, toggleTask, deleteTask,addTask }) {
    const date = new Date(activeProject.dueDate).toLocaleDateString();

    return (
        <div className="w-full flex flex-col gap-5 px-8">
            <div className="flex flex-row items-center  gap-2">
                <IconButton variant="text" color="deep-purple" onClick={unselectProject}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#673AB7">
                        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                    </svg>
                </IconButton>
                <Chip variant="ghost" value="Back" color="deep-purple" className="w-max" size="sm" />
            </div>

            <Typography variant="paragraph" className="text-xl font-semibold text-deep-purple-700">
                {activeProject.name}
            </Typography>

            <Chip variant="ghost" value={date} color="deep-purple" className="w-max" size="sm" />

            <Typography variant="paragraph" className="pb-10 border-b-[1px] border-deep-purple-200 text-md font-semibold text-deep-purple-300">
                {activeProject.desc}
            </Typography>


            <Chip variant="ghost" value="Project Checklist" color="deep-purple" className="w-max mt-2 " size="md" />

            <List className=" flex flex-col gap-4">
                {activeProject.tasks.map(task => (
                    <TaskItem
                        key={task.task_id}
                        task={task}
                        toggle={() => toggleTask(activeProject.id, task.task_id)}
                        deleteTask={() => deleteTask(activeProject.id, task.task_id)}
                    />
                ))}
                <NewTaskItem projectId={activeProject.id} addTask={addTask}/>
            </List>
        </div>
    );
}
