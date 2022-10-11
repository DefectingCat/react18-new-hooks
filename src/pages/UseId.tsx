import Input from 'components/Input';
import { DemoProps } from 'layouts/DemoLayout';
import { useEffect, useId } from 'react';

const RUAForm = () => {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}`}>Label 1: </label>
      <div>
        <Input type="text" id={`${id}`} />
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
