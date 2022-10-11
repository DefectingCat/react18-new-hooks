import { lazy } from 'react';
import { Link } from 'react-router-dom';

const Card = lazy(() => import('components/Card'));

const list = [
  {
    text: 'useTransition',
    path: '/use-transition',
  },
  {
    text: 'useDeferredValue',
    path: '/use-deferred-value',
  },
];

function App() {
  return (
    <>
      <div className="p-4 flex">
        {list.map((item) => (
          <Card key={item.path}>
            <Link to={item.path}>{item.text}</Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
