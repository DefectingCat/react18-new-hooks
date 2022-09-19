import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const App = lazy(() => import('App'));
const UseTransition = lazy(() => import('pages/UseTransition'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback>
        <App />
      </Suspense>
    ),
  },
  {
    path: '/use-transition',
    element: (
      <Suspense fallback>
        <UseTransition />
      </Suspense>
    ),
  },
];

export default routes;
