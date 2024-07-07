import { useSelector,useDispatch } from "react-redux"
import { deleteToDo,editToDo,checkUpdate } from "../../features/todo/todoSlice";
import { useState } from "react";

function Itemtodo() {
    const todolist = useSelector((state)=>(state.todos));
    const [editableId, setEditableId] = useState(null);
    const [text,setText] = useState('');

    const dispatchUse = useDispatch();

    const handleDelete = (id)=>{
       dispatchUse(deleteToDo(id))
    }

    const handleEdit = (id,text)=>{
        setEditableId(id);
        setText(text);
        
    }
    const handleSave = (id)=>{
       dispatchUse(editToDo({id,text}));
       setEditableId(null);
    }

    const handleInputUpdate = (e)=>{
        setText(e.target.value);
    }
    const handleChecked = (id)=>{
       dispatchUse(checkUpdate(id));

    }
    console.log("todolist",todolist);
   return (
    <>
    {  
        todolist.map((item)=>(
            <div  className="flex-wrap sm:flex-nowrap  flex justify-center align-middle gap-1 bg-cyan-200 p-6 rounded-md mb-4"
            key={item.id}
            >
             
                <input 
                className="basis-1/12 max-w-5"
                type="checkbox"
                disabled={editableId === item.id}
                onChange={()=>{handleChecked(item.id)}}
                />
               {
                editableId === item.id?(
                    <>
                      <input 
                        className={`basis-11/12 sm:basis-9/12 border-2 rounded-md p-2 outline-none  focus:border-black `}
                        type="text"
                        value={text}
                        onChange={handleInputUpdate}
                        />
                        <button className={`basis-6/12 sm:basis-1/12 rounded-md text-white p-2 bg-black
                            ${item.complted?"bg-gray-300":""}
                        `}
                        onClick={()=>{handleSave(item.id)}}>
                        Save
                        </button>
                    </>
                    
                    
                )
                :(
                    <>
                        <div className={`basis-11/12 sm:basis-9/12 bg-white rounded-md p-2 text-left ${item.completed?"line-through":""} `}>
                          {item.title}
                        </div>
                        <button className={`basis-6/12 sm:basis-1/12  rounded-md text-white p-2 bg-black
                                ${item.completed?"bg-gray-300":""}
                            `}
                            onClick={ ()=>{handleEdit(item.id,item.title)} }
                            disabled={item.completed}>
                            Edit
                            </button>
                    </>
                )
               }
                
                <button className="basis-6/12 sm:basis-1/12 bg-red-500 rounded-md text-white p-2"
                onClick={()=>{handleDelete(item.id)}}>
                Delete
                </button>

            </div>
        ))
    }
    </>
    
  )
}

export default Itemtodo
