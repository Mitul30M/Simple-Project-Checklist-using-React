import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import {
    Chip,
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItemSuffix,
    ListItem,
} from "@material-tailwind/react";
import { TrashIcon } from "./TaskList";

const ProjectsDrawer = forwardRef(function ProjectsDrawer({ projects, viewForm, selectProject, deleteProject }, ref) {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setOpen(true);
        },
        close() {
            setOpen(false);
        }
    }));

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="deep-purple"
                className="w-fit"
                size="sm"
                onClick={() => setOpen(true)}
            >
                Select Project
            </Button>
            <Drawer open={open} onClose={() => setOpen(false)} className="p-4 bg-deep-purple-50">
                <div className="mb-6 flex items-center justify-between">
                    <Chip variant="ghost" value="Your Projects" color="deep-purple" size="lg" className=" text-sm rounded-lg" />
                    <IconButton variant="text" color="deep-purple" onClick={() => setOpen(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <div className=" w-full flex flex-col text-left justify-start">
                    <Button
                        variant="text"
                        color="deep-purple"
                        className="w-fit"
                        size="sm"
                        onClick={viewForm}
                    >
                        + New Project
                    </Button>

                    <List className="flex flex-col w-full p-0 gap-1 mt-5 ">
                        {projects.map((project, idx) => (
                            <ListItem key={idx} onClick={()=>selectProject(idx)} ripple={true} className="text-deep-purple-600 font-semibold text-sm py-1 pr-1 pl-4 focus:bg-deep-purple-100 hover:bg-deep-purple-100">
                                {project.name}
                                <ListItemSuffix>
                                    <IconButton variant="text" color="deep-purple" onClick={(evt) => {
                                        evt.stopPropagation()
                                        deleteProject(project.id);
                                    }}>
                                        <TrashIcon currentColor={"#A68CD5"} className="w-4 h-4" />
                                    </IconButton>
                                </ListItemSuffix>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    )
});

export default ProjectsDrawer;
