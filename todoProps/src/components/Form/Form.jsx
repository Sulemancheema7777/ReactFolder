import { useState } from "react";
import propTypes from "prop-types"

Form.propTypes = {
  todolist: propTypes.array.isRequired,
  settodolist: propTypes.func.isRequired
}

function Form({todolist,settodolist}) {

const [toDo,setToDo] = useState("");

 function handleOnSubmit(e){
    e.preventDefault();
    if(!toDo) return;
    setToDoItem({id:Date.now(),title:toDo,completed:false});
 }

 const setToDoItem =(item)=>{
  setToDo('');
   return settodolist([item,...todolist]);
   
 }


  return (
    <form className="flex justify-center align-middle mb-8"
    onSubmit={handleOnSubmit}
    >
        <input 
        className="basis-10/12 border-gray-300 border-2 rounded-md focus:border-black outline-none p-2"
        type="text"
        placeholder="Enter Todo"
        value={toDo}
        onChange={(e)=>setToDo(e.target.value)}
         />
        <button className="basis-2/12 bg-black text-white rounded-md" 
        type="submit">
            Add
        </button>
    </form>
  )
}

export default Form