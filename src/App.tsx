import { lazy } from 'react';
import { Link } from 'react-router-dom';
import { routePath } from 'routes';

const Card = lazy(() => import('components/Card'));

function App() {
  return (
    <>
      <div className="p-4 flex">
        {routePath.map((item) => (
          <Card key={item.path}>
            <Link to={item.path}>{item.text}</Link>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
