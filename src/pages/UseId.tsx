import { DemoProps } from 'layouts/DemoLayout';
import { useEffect, useId } from 'react';

const RUAForm = () => {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}`}>Label 1: </label>
      <div>
        <input
          type="text"
          id={`${id}`}
          className="transition-all px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
    </>
  );
};

const UseId = ({ onLoad }: DemoProps) => {
  useEffect(() => {
    onLoad?.();
  }, []);

  return (
    <>
      <RUAForm />
      <RUAForm />
    </>
  );
};

export default UseId;
