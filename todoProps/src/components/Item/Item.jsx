import { useState } from "react";
import propTypes from "prop-types"

Item.propTypes = {
  item: propTypes.object.isRequired,
  todolist: propTypes.array.isRequired,
  settodolist: propTypes.func.isRequired
}

function Item({item,todolist,settodolist}) {

const [editable,setEditable] = useState(false);
const [updatedtodo,setUpdatedtodo] = useState(item.title);

function handleChange(e){
   setUpdatedtodo(e.target.value);
}
  function handleClick(){
    setEditable(!editable);
    if(editable){
      settodolist(todolist.map((todo)=>{
        return item.id === todo.id ? {...todo,title:updatedtodo} : todo
      }
      ));
    }
  }

  function handleClickDelete(){
      settodolist(todolist.filter((todo)=>{
        return item.id !== todo.id
      }
      ));
  }
  function checkChange(){
    settodolist(todolist.map((todo)=>{
        return item.id === todo.id ? {...todo,completed:!item.completed} : todo
      }
      ));
  }

  return (
    <div className="flex justify-center align-middle gap-1 bg-cyan-200 p-6 rounded-md mb-4">
        <input 
        className="basis-1/12 max-w-5"
        type="checkbox" 
        onChange={checkChange} 
        checked={item.completed}
        />
        <input 
        className={`basis-9/12  border-2 rounded-md p-2 outline-none
          ${editable ?"border-black outline-none":"border-gray-300" }
          ${item.completed ?"line-through":"" }
          `}
        type="text"
        readOnly={!editable}
        value={updatedtodo}
        onChange={handleChange}
        />
        <button className={`basis-1/12 rounded-md text-white p-2 ${item.completed? "bg-gray-300": "bg-black"}`}
        onClick={handleClick}
        disabled={item.completed}
        >
        {editable? "Save": "Edit" }
        </button>
        <button className="basis-1/12 bg-red-500 rounded-md text-white p-2"
        onClick={handleClickDelete}
        >
        Delete
        </button>

    </div>
  )
}


export default Item