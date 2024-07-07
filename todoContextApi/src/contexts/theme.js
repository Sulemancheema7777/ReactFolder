import { useContext,createContext } from "react";

export const todoContext = createContext({
   todoList:[],
   addToDo:(todo)=>{},
   editToDo:(id,newTitle)=>{},
   deleteToDo:(id)=>{},
   completeToDo:(id)=>{}
});

export const useTodo = ()=>{
    return useContext(todoContext);
}
export const TodoProvider = todoContext.Provider;