import { Typography, ListItem, Button, Textarea } from "@material-tailwind/react";
import { useState } from "react";
export default function NewTaskItem({ projectId, addTask }) {

    const [text, setText] = useState('');
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <ListItem className="mt-2 p-0 pt-7 border-t-[1px] rounded-none border-deep-purple-200 focus:bg-deep-purple-50 hover:bg-deep-purple-50 ">
            <form
                action="#"
                onSubmit={(evt) => {
                    evt.preventDefault();
                    addTask(projectId, text);
                    setText('');
                }}
                className="w-full flex flex-col justify-start items-end gap-2">
                <Textarea required variant="outlined" color="deep-purple" value={text} label="New Task" rows={3} className="text-md font-semibold text-deep-purple-500" onChange={handleChange} />
                <Button size="sm" className="rounded-md" type="submit" color="deep-purple">
                    + New Task
                </Button>
            </form>

        </ListItem>
    );
}