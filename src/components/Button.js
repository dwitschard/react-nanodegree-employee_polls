const Button = ({ disabled, handleClick, children, className }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type="button"
      className={`px-3 py-1 text-xl uppercase rounded bg-primary text-tertiary ${className} ${
        !disabled && "hover:cursor-pointer hover:bg-accentPrimary"
      } `}
    >
      <pre>{disabled}</pre>
      {children}
    </button>
  );
};

export default Button;
