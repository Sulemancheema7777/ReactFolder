import { useState } from "react"
import { useDispatch } from "react-redux";
import { addToDo } from "../../features/todo/todoSlice";

function Addtodo() {

  const [text,setText] = useState('');
  const dispatch = useDispatch();


  const handleOnSubmit = (e)=>{
    e.preventDefault();
    dispatch(addToDo(text));
    setText('');
  }

  const handleOnChange = (e)=>{
    setText(e.target.value);
  }
  return (
    <form className="flex justify-center align-middle mb-8 gap-2"
    onSubmit={handleOnSubmit}
    >
        <input 
        className="basis-10/12 border-gray-300 border-2 rounded-md focus:border-black outline-none p-2"
        type="text"
        placeholder="Enter Todo"
        required
        value={text}
        onChange={handleOnChange}
        />
        <button className="basis-2/12 bg-black text-white rounded-md" 
        type="submit">
            Add
        </button>
    </form>
  )
}

export default Addtodo