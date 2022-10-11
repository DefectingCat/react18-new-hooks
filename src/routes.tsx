import DemoLayout from 'layouts/DemoLayout';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const App = lazy(() => import('App'));
const UseTransition = lazy(() => import('pages/UseTransition'));
const UseDeferredValue = lazy(() => import('pages/UseDeferredValue'));

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
      <DemoLayout title="useTransition">
        <Suspense fallback>
          <UseTransition />
        </Suspense>
      </DemoLayout>
    ),
  },
  {
    path: '/use-deferred-value',
    element: (
      <DemoLayout title="useDeferredValue">
        <Suspense fallback>
          <UseDeferredValue />
        </Suspense>
      </DemoLayout>
    ),
  },
];

export default routes;
