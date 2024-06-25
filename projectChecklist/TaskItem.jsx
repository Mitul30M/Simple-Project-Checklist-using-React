import { ListItem, ListItemSuffix, IconButton } from "@material-tailwind/react";

export default function TaskItem({ task, toggle, deleteTask }) {
    function TrashIcon() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#623CA5" className="h-5 w-5">
                <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    return (
        <ListItem className="group hover:bg-deep-purple-100 flex flex-row justify-start items-center gap-4 p-2" >
            <input
                type="checkbox"
                name={task.task_desc}
                value={task.task_desc}
                id={task.task_id}
                checked={task.isCompleted}
                onChange={toggle}
                className="peer  accent-deep-purple-50 focus:active:bg-deep-purple-200 border-deep-purple-500 border-2 checked:accent-deep-purple-200 checked:group-hover:checked:accent-deep-purple-400 h-4 w-4"
            />
            <label htmlFor={task.task_id} className="max-w-[200px] flex-grow text-wrap text-md font-semibold text-deep-purple-500 peer-checked:text-deep-purple-200">
                {task.task_desc}
            </label>
            <ListItemSuffix>
                <IconButton variant="text" size="sm" onClick={deleteTask}>
                    <TrashIcon />
                </IconButton>
            </ListItemSuffix>
        </ListItem>
    );
}
