import { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoActionType, TodosDispatch } from '../contexts/TodoContext';

const TodoDeleteButton = ({ todo }: { todo: Todo }) => {
  const todosDispatch = useContext(TodosDispatch);
  function remove() {
    fetch('http://localhost:5000/todo/' + todo.id, { method: 'DELETE' }).then(
      (_) => todosDispatch({ type: TodoActionType.REMOVE, id: todo.id })
    );
  }

  return (
    <button onClick={remove} className='btn btn-link text-danger'>
      <i className='fa fa-trash'></i>
    </button>
  );
};

export default TodoDeleteButton;
