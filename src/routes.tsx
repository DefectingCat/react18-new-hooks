import DemoLayout from 'layouts/DemoLayout';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const App = lazy(() => import('App'));
const UseTransition = lazy(() => import('pages/UseTransition'));
const UseDeferredValue = lazy(() => import('pages/UseDeferredValue'));

export const routePath = [
  {
    path: '/use-transition',
    text: 'useTransition',
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
    text: 'useDeferredValue',
    element: (
      <DemoLayout title="useDeferredValue">
        <Suspense fallback>
          <UseDeferredValue />
        </Suspense>
      </DemoLayout>
    ),
  },
];

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback>
        <App />
      </Suspense>
    ),
  },
].concat(routePath.map(({ path, element }) => ({ path, element })));

export default routes;
