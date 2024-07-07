import { useState } from 'react'
import {Form,Item} from './components/index'
import { TodoProvider } from './contexts/theme'
import './App.css'

function App() {
  const [todoList, settodoList] = useState([]);
   
  const addToDo = (todo)=>{
    settodoList((prev)=>([todo,...prev]))
  }

  const editToDo = (id,newTitle)=>{
    settodoList(todoList.map((todo)=>(todo.id===id?{...todo,title:newTitle}:todo)))
  }

  const deleteToDo = (id)=>{
    settodoList(todoList.filter((todo)=>(todo.id!==id)));
  }

  const completeToDo = (id)=>{
    settodoList(todoList.map((todo)=>(todo.id===id?{...todo,completed:!todo.completed}:todo)));
  }

console.log(todoList);
  return (
     <TodoProvider value={{todoList,addToDo,editToDo,deleteToDo,completeToDo}}>
      <div className="text-center sm:4/4 md:w-2/4 ml-auto mr-auto mt-10 p-6">
        <h1 className="text-3xl mb-4">Manage Your To dos</h1> 
        <Form/>
        {
          todoList.map((todo)=>(
            <Item key={todo.id} todo={todo}/>
          ))
        }
        
      </div>
    </TodoProvider>
  )
}

export default App
