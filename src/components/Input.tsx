import classNames from 'classnames';

type InputProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ ...rest }: InputProps) => {
  const { className, ...props } = rest;

  return (
    <>
      <input
        className={classNames(
          'transition-all px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-80 dark:focus:border-blue-300 focus:outline-none focus:ring',
          className
        )}
        {...props}
      />
    </>
  );
};

export default Input;
