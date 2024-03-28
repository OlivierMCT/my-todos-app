import { Outlet} from 'react-router';
import { NavLink } from 'react-router-dom';
import TodosProvider from './components/TodosProvider';
import TodoCounter from './components/TodoCounter';



function App() {

  return (
    <>
      <TodosProvider>
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
      </TodosProvider>
    </>
  );
}

export default App;
