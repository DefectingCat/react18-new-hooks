import { ReactElement, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <>
      <div className="rounded-lg shadow p-4 mr-4">{children}</div>
    </>
  );
};

export default Card;
