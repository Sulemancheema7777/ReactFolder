import { useState } from "react"
import { useTodo } from "../../contexts/theme";

function Form() {
  const [title,setTitle] = useState('');
  const {addToDo} = useTodo();

  const handleOnChange = (e)=>{
    setTitle(e.target.value);  
  }
  const handleOnSubmit = (e)=>{
   e.preventDefault();
   if(title){
    addToDo({id:Date.now(),title:title,completed:false});
    }
    setTitle('');
  }
  return (
    <form className="flex justify-center align-middle mb-8 gap-2"
    onSubmit={handleOnSubmit}
    >
        <input 
        className="basis-10/12 border-gray-300 border-2 rounded-md focus:border-black outline-none p-2"
        type="text"
        placeholder="Enter Todo"
        value={title}
        required
        onChange={handleOnChange}
        />
        <button className="basis-2/12 bg-black text-white rounded-md" 
        type="submit">
            Add
        </button>
    </form>
  )
}

export default Form