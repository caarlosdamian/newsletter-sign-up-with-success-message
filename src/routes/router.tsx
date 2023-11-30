import { createBrowserRouter } from 'react-router-dom';
import { Home, Success, Root } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
]);
