import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = lazy(() => import('App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback>
        <App />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
]);

export default router;
