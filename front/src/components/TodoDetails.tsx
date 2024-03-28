import { Todo } from '../models/Todo';

const TodoDetails = ({ todo }: { todo: Todo }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{todo.title}</h5>
      </div>
    </div>
  );
};

export default TodoDetails;
