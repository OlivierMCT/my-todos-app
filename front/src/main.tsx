import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import { RouterProvider } from 'react-router';
import TodoList from './views/TodoList.tsx';
import TodoAdd from './views/TodoAdd.tsx';
import TodosProvider from './components/TodosProvider.tsx';
import { connect } from 'socket.io-client';

export let socket = connect('http://localhost:5000');
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <>Ooooops</>,

    children: [
      {
        path: 'mes-taches',
        element: <TodoList />,
      },
      {
        path: 'nouvelle-tache',
        element: <TodoAdd />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodosProvider>
      <RouterProvider router={router} />
    </TodosProvider>
  </React.StrictMode>
);
