import { useState } from "react"
import { Item,Form } from "./components"

function App() {
const [toDoList,setToDoList] = useState([]);
  return (
    <div className="text-center sm:4/4 md:w-2/4 ml-auto mr-auto mt-10 p-6">
     <h1 className="text-3xl mb-4">Manage Your Todos</h1> 
     <Form
     todolist={toDoList}
     settodolist={setToDoList}
     />
     {
       toDoList.map((item)=>
         (<div key={item.id}>
           <Item  item={item} todolist={toDoList} settodolist={setToDoList} />
           </div> 
          )
      )
      }

    </div>
  )
}
export default App
