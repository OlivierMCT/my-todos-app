
import { Todo } from '../models/Todo';
import TodoDeleteButton from './TodoDeleteButton';
import TodoToggleButton from './TodoToggleButton';

const TodoDetails = ({ todo }: { todo: Todo }) => {
  return (
    <div className='card mt-2'>
      <div className='card-body'>
        <div className='d-flex'>
          <TodoToggleButton todo={todo} />
          <div className='ms-3'>
            <h5 className='card-title'>{todo.title}</h5>
            <span className='badge text-bg-dark'>
              {todo.dueDate.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className='card-footer text-end'>
        <TodoDeleteButton todo={todo} />
      </div>
    </div>
  );
};

export default TodoDetails;
