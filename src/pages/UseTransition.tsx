import { useState } from 'react';

const UseTransition = () => {
  const [value, setValue] = useState(0);
  const [length, setLength] = useState(100000);

  const handleClick = () => {
    setValue((v) => v + 1);
    setLength((l) => l + 1);
  };

  return (
    <>
      <div className="p-4 flex flex-col max-w-full">
        <div className="text-xl">useTransition</div>

        <div className="my-4">
          <button
            onClick={handleClick}
            className="rounded-md px-5 py-2 border focus:ring-4 transition-all"
          >
            {value}
          </button>
        </div>

        <div className="flex flex-wrap">
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
