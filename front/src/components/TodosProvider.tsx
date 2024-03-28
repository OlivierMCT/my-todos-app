import { useReducer } from "react";
import { TodoState, TodosContext, TodosDispatch, TodosReducer } from "../contexts/TodoContext";

const TodosProvider = ({children}) => {
  const intialTodoState: TodoState = {
    todos: [],
    categories: []
  }
  const [todoState, todoDispatch] = useReducer(TodosReducer, intialTodoState);
  return (
    <>
      <TodosContext.Provider value={todoState}>
        <TodosDispatch.Provider value={todoDispatch}>    
          {children}
        </TodosDispatch.Provider>
      </TodosContext.Provider>
    </>
  );
};

export default TodosProvider;
