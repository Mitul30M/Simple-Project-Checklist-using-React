import { useState, useRef, useEffect } from "react";
import { Input, Textarea, Button, Chip } from "@material-tailwind/react";
import { v4 as uuid } from 'uuid';

export default function NewProjectForm({ addNewProjects, hideForm, ...props }) {
    const [newProject, setNewProject] = useState({
        id: uuid(),
        name: '',
        desc: '',
        dueDate: '',
        tasks: []
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setNewProject(prevProject => ({ ...prevProject, [name]: value }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addNewProjects(newProject);
    };

    useEffect(() => {
        console.log(newProject);
    }, [newProject]);

    return (
        <form action="#" {...props} onSubmit={handleSubmit}>
            <Chip variant="ghost" value="Add New Project" color="deep-purple" size="lg" className="text-center" />
            <Input
                onChange={handleInputChange}
                className="text-deep-purple-900 font-semibold text-sm"
                label="Project Name"
                name="name"
                value={newProject.name}
                type="text"
                required
                color="deep-purple"
            />
            <Input
                onChange={handleInputChange}
                className="text-deep-purple-900 font-semibold text-sm"
                label="Project Due Date"
                name="dueDate"
                value={newProject.dueDate}
                type="date"
                required
                color="deep-purple"
            />
            <Textarea
                onChange={handleInputChange}
                className="text-deep-purple-900 font-semibold text-sm"
                label="Project Description"
                name="desc"
                value={newProject.desc}
                required
                color="deep-purple"
                rows={10}
            />

            <div className="flex flex-row gap-3 w-max">
                <Button
                    type="submit"
                    variant="filled"
                    color="deep-purple"
                    className="w-fit"
                    size="md"
                >
                    + New Project
                </Button>
                <Button
                    type="reset"
                    variant="text"
                    color="deep-purple"
                    className="w-fit"
                    size="sm"
                    onClick={(evt) => {
                        evt.preventDefault();
                        setNewProject({
                            id: uuid(),
                            name: '',
                            desc: '',
                            dueDate: '',
                            tasks: []
                        });
                        hideForm();
                    }}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
}
