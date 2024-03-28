import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import { RouterProvider } from 'react-router';
import TodoList from './views/TodoList.tsx';
import TodoAdd from './views/TodoAdd.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <>Ooooops</>,

    children: [
      {
        path: 'mes-taches',
        element: <TodoList />,
        loader: () => fetch('http://localhost:5000/todo'),
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
