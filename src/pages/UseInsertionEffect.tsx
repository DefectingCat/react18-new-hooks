import { DemoProps } from 'layouts/DemoLayout';
import { useEffect, useLayoutEffect, useInsertionEffect } from 'react';

const Child = () => {
  useEffect(() => {
    console.log('useEffect child is called');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect child is called');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect child is called');
  });

  return <></>;
};

const UseInsertionEffect = ({ onLoad }: DemoProps) => {
  useEffect(() => {
    onLoad?.();
  }, []);

  useEffect(() => {
    console.log('useEffect app is called');
  });
  useLayoutEffect(() => {
    console.log('useLayoutEffect app is called');
  });
  useInsertionEffect(() => {
    console.log('useInsertionEffect app is called');
  });

  return (
    <>
      <Child />
      <div>Check console in DevTools</div>
    </>
  );
};

export default UseInsertionEffect;
