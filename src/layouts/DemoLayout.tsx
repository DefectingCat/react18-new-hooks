import { ReactNode } from 'react';

type DemoProps = {
  title: string;
  children: ReactNode;
};

const DemoLayout = ({ title, children }: DemoProps) => {
  return (
    <>
      <div className="p-4 flex flex-col max-w-full">
        <div className="text-xl">{title}</div>

        {children}
      </div>
    </>
  );
};

export default DemoLayout;
