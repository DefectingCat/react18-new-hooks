import classNames from 'classnames';
import Button from 'components/Button';
import { useState, useTransition } from 'react';

const UseTransition = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(-1);
  const [length, setLength] = useState(100000);
  const [pending, setTransiton] = useTransition();

  const handleClick = () => {
    setValue((v) => v + 1);
    setTransiton(() => setLength((l) => l + 1));
    // setLength((l) => l + 1);
  };

  return (
    <>
      <div className="p-4 flex flex-col max-w-full">
        <div className="text-xl">useTransition</div>

        <div className="my-4">
          <Button onClick={handleClick}>{value}</Button>
          <Button onClick={() => setValue2((v) => v - 1)}>{value2}</Button>
        </div>

        <div
          className={classNames(
            'flex flex-wrap transition-all',
            pending && 'opacity-50'
          )}
        >
          {Array.from({ length }).map((_, i) => (
            <div className="rounded-md shadow p-2 mr-2 mb-2" key={length - i}>
              {length - i}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UseTransition;
