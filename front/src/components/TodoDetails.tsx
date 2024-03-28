import { Todo } from '../models/Todo';

const TodoDetails = ({ todo }: { todo: Todo }) => {
  let checkClasses = `far fa-3x fa${todo.isDone ? '-check' : ''}-circle`;
  return (
    <div className='card mt-2'>
      <div className='card-body'>
        <div className='d-flex'>
          <i className={checkClasses}></i>
          <div className='ms-3'>
            <h5 className='card-title'>{todo.title}</h5>
            <span className='badge text-bg-dark'>
              {todo.dueDate.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className='card-footer text-end'>
        <button className='btn btn-link text-danger'>
          <i className='fa fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default TodoDetails;
