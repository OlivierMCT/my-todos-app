import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import TodosProvider from './components/TodosProvider';
import TodoCounter from './components/TodoCounter';
import { useContext, useEffect } from 'react';
import { connect } from 'socket.io-client';
import { TodoActionType, TodosDispatch } from './contexts/TodoContext';
import { TodoDto } from './models/Todo';


function App() {
  const todosDispatch = useContext(TodosDispatch);
  
  useEffect(() => {     
    let socket = connect('http://localhost:5000')
    socket.on('toggled', (todo: TodoDto) =>
      todosDispatch({ type: TodoActionType.TOGGLE, dto: todo })
    );

    socket.on('removed', (id: number) =>
      todosDispatch({ type: TodoActionType.REMOVE, id: id })
    );

    return () => { socket.close() }
  }, [])

  return (
    <>
      
        <header>
          <h1 className='container-fluid'>Mes trucs à faire</h1>
        </header>
        <nav className='container-fluid'>
          <ul className='nav nav-underline'>
            <li className='nav-item'>
              <NavLink to={'/mes-taches'} className='nav-link'>
                Mes Taches
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={'/nouvelle-tache'} className='nav-link'>
                Nouvelle Tache
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className='container-fluid mt-4'>
          <Outlet />
        </main>
        <footer>
          <hr />
          <div className='container-fluid'>
            <TodoCounter />

            <span className='badge text-bg-dark me-2'>
              <i className='fa fa-user me-1'></i>
              Olivier
            </span>

            <span className='badge text-bg-dark me-2'>
              <i className='fa fa-code-branch me-1'></i>
              0.0.1
            </span>
          </div>
        </footer>
    </>
  );
}

export default App;
