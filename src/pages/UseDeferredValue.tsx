import classNames from 'classnames';
import Button from 'components/Button';
import { useDeferredValue, useState } from 'react';

const UseDeferredValue = () => {
  const [value, setValue] = useState(0);
  const deferred = useDeferredValue(value);

  return (
    <>
      <div className="my-4">
        <div>
          Deferred:
          <Button onClick={() => setValue((v) => v + 1)}>{deferred}</Button>
        </div>

        <div>
          Primtive:
          <Button onClick={() => setValue((v) => v + 1)}>{value}</Button>
        </div>
      </div>

      <div className={classNames('flex flex-wrap transition-all')}>
        {Array.from({ length: 100000 }).map((_, i) => (
          <div className="rounded-md shadow p-2 mr-2 mb-2" key={i}>
            {i}
          </div>
        ))}
      </div>
    </>
  );
};

export default UseDeferredValue;
