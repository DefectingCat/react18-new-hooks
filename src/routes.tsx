import DemoLayout from 'layouts/DemoLayout';
import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const App = lazy(() => import('App'));
const UseTransition = lazy(() => import('pages/UseTransition'));
const UseDeferredValue = lazy(() => import('pages/UseDeferredValue'));
const UseId = lazy(() => import('pages/UseId'));
const UseSyncExternalStore = lazy(() => import('pages/UseSyncExternalStore'));
const UseInsertionEffect = lazy(() => import('pages/UseInsertionEffect'));

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
  {
    path: '/use-id',
    text: 'useId',
    element: (
      <DemoLayout title="useId">
        <Suspense fallback>
          <UseId />
        </Suspense>
      </DemoLayout>
    ),
  },
  {
    path: '/use-sync-external-store',
    text: 'useSyncExternalStore',
    element: (
      <DemoLayout title="useSyncExternalStore">
        <Suspense fallback>
          <UseSyncExternalStore />
        </Suspense>
      </DemoLayout>
    ),
  },

  {
    path: '/use-insertion-effect',
    text: 'useInsertionEffect',
    element: (
      <DemoLayout title="useInsertionEffect">
        <Suspense fallback>
          <UseInsertionEffect />
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
