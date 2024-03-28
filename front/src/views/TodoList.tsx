import { useContext } from 'react';
import {
  TodoActionType,
  TodoActions,
  TodoState,
  TodosContext,
  TodosDispatch,
} from '../contexts/TodoContext';
import { useLoaderData } from 'react-router';
import { TodoDto } from '../models/Todo';
import TodoDetails from '../components/TodoDetails';

const TodoList = () => {
  const todosContext = useContext(TodosContext) as TodoState;
  const todosDispatch = useContext(TodosDispatch);

  let action: TodoActions = {
    type: TodoActionType.LOAD,
    dtos: useLoaderData() as TodoDto[],
  };
  todosDispatch(action);


  let todos = todosContext.todos;
  todos.sort((t1, t2) => t1.title.localeCompare(t2.title))

  return (
    <section>
      {todos.map((todo) => (
        <TodoDetails todo={todo} />
      ))}
    </section>
  );
};

export default TodoList;
