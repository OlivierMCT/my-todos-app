import { useContext } from 'react';
import { TodosContext } from '../contexts/TodoContext';

const TodoCounter = () => {
  const todosContext = useContext(TodosContext);

  return (
    <span className='badge text-bg-info me-2'>
      <i className='fa fa-clipboard-check me-1'></i>
      {todosContext.todos.length} tâches
    </span>
  );
};

export default TodoCounter;
