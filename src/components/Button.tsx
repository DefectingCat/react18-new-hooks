import classNames from 'classnames';

type ButtonProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ ...rest }: ButtonProps) => {
  const { children, className, ...props } = rest;

  return (
    <>
      <button
        className={classNames(
          'rounded-md px-5 py-2 border',
          'focus:ring-4 transition-all mr-4',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
