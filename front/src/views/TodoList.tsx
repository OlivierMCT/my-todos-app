import { useContext, useEffect } from 'react';
import {
  TodoActionType,
  TodoActions,
  TodoState,
  TodosContext,
  TodosDispatch,
} from '../contexts/TodoContext';
import { TodoDto } from '../models/Todo';
import TodoDetails from '../components/TodoDetails';

const TodoList = () => {
  const todosContext = useContext(TodosContext) as TodoState;
  const todosDispatch = useContext(TodosDispatch);

  useEffect(() => {
    fetch('http://localhost:5000/todo').then((r) =>
      r.json().then((data) => {
        let action: TodoActions = {
          type: TodoActionType.LOAD,
          dtos: data as TodoDto[],
        };
        todosDispatch(action);
      })
    );
  }, []);

  let todos = todosContext.todos;
  todos.sort((t1, t2) => t1.title.localeCompare(t2.title));

  return (
    <section>
      {todos.map((todo) => (
        <TodoDetails key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
