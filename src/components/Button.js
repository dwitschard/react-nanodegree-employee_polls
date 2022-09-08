const Button = ({ disabled, handleClick, children, className }) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type="button"
      className={`px-3 py-1 text-xl uppercase rounded bg-primary hover:cursor-pointer text-tertiary hover:bg-accentPrimary ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
