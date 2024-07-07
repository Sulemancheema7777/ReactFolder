import { useState } from "react"
import { useTodo } from "../../contexts/theme";

function Item({todo}) {

const [editable,setEditable] = useState(false);
const [completed,setCompleted] = useState(false);
const [newTitle,setNewTitle] = useState(todo.title);

const {editToDo,deleteToDo,completeToDo} = useTodo();

const handleNewTitle = (e)=>{
  setNewTitle(e.target.value);
}
 const handleUpdate = ()=>{
   setEditable(!editable);
   if(editable){
    editToDo(todo.id,newTitle);
   } 
 }
 const handleDelete = ()=>{
  deleteToDo(todo.id);
 }

 const handleComplete = ()=>{
  setCompleted(!completed);
  completeToDo(todo.id);
 }

  return (
    <div className="flex justify-center align-middle gap-1 bg-cyan-200 p-6 rounded-md mb-4">
        <input 
        className="basis-1/12 max-w-5"
        type="checkbox" 
        checked={completed}
        onChange={handleComplete}
        />
        <input 
        className={`basis-9/12  border-2 rounded-md p-2 outline-none ${completed ? "line-through": ""}
        ${editable?"border-black":"border-gray-300"}`}
        type="text"
        value={newTitle}
        readOnly={!editable}
        onChange={handleNewTitle}
        />
        <button className={`basis-1/12 rounded-md text-white p-2 ${completed ? "bg-gray-300":"bg-black"}`}
        onClick={handleUpdate}>
          {editable ? "Save":"Edit"}
        </button>
        <button className="basis-1/12 bg-red-500 rounded-md text-white p-2"
        onClick={handleDelete}
        >
        Delete
        </button>

    </div>
  )
}

export default Item