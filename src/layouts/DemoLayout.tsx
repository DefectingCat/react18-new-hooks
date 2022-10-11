import classNames from 'classnames';
import React, { SuspenseProps, useCallback } from 'react';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

type DemoLayoutProps = {
  title: string;
  children: ReactElement<SuspenseProps>;
};

export type DemoProps = {
  onLoad?: () => void;
};

const DemoLayout = ({ title, children }: DemoLayoutProps) => {
  const [loading, setLoading] = useState(true);
  const handleChildLoad = useCallback(() => {
    setLoading(false);
  }, []);

  /**
   * Pass onLoad funtion to Suspense child
   */
  const childrenWithProps = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const demoChild = React.Children.map(
      child.props.children as ReactElement<DemoProps>,
      (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          onLoad: handleChildLoad,
        });
      }
    );
    return React.cloneElement(child, {
      children: demoChild,
    });
  });

  return (
    <>
      <div className="p-4 flex flex-col max-w-full">
        <div className="text-xl">{title}</div>

        <div
          className={classNames('text-xl transition-all', loading || 'hidden')}
        >
          Loading...
        </div>
        {childrenWithProps}
      </div>
    </>
  );
};

export default DemoLayout;
