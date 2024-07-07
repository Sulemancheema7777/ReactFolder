import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialValues = {
  todos:[]
}

const todoSlice = createSlice({
 name:'todo',
 initialState:initialValues,
 reducers:{
    addToDo:(state,action)=>{
        const todo = {
            id:nanoid(),
            title:action.payload,
            completed:false
        }
        state.todos.push(todo);
    },
    deleteToDo:(state,action)=>{
      state.todos = state.todos.filter((todo)=>todo.id!==action.payload);
    },
    editToDo:(state,action)=>{
      state.todos.map((todo)=>{todo.id === action.payload.id?todo.title=action.payload.text:''});
      
    },
    checkUpdate:(state,action)=>{
      state.todos.map((todo)=>
        {
            if(todo.id === action.payload){
                todo.completed=!todo.completed
                console.log(todo.completed)
            }
            
        });
      
    }
 }
});

export const {addToDo,deleteToDo,editToDo,checkUpdate} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;