import classNames from 'classnames';
import { useDeferredValue, useState } from 'react';

const UseDeferredValue = () => {
  const [value, setValue] = useState(0);
  const deferred = useDeferredValue(value);

  return (
    <>
      <div className="p-4 flex flex-col max-w-full">
        <div className="text-xl">useDeferredValue</div>

        <div className="my-4">
          <button></button>
        </div>

        <div className={classNames('flex flex-wrap transition-all')}>
          {Array.from({ length: 100000 }).map((_, i) => (
            <div className="rounded-md shadow p-2 mr-2 mb-2" key={i}>
              {i}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UseDeferredValue;
