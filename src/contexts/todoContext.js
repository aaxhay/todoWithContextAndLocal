import { useContext,createContext } from "react";

export const todoContext = createContext({
    todos: [
        {
         id : 1,
         todo : "Something",
         checkBoxStatus : false,   
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleStatus : (id) => {}
});

export const useTodo = () =>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;