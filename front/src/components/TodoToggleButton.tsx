import { Todo } from '../models/Todo';
import { connect } from 'socket.io-client';

const TodoToggleButton = ({ todo }: { todo: Todo }) => {
  let checkClasses = `far fa-3x fa${todo.isDone ? '-check' : ''}-circle`;

  function toggle() {
    connect('http://localhost:5000').emit('toggling', todo.id);
  }

  return <i onClick={toggle} style={{cursor: 'pointer'}} className={checkClasses}></i>;
};

export default TodoToggleButton;
