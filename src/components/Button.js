const Button = ({
  disabled,
  handleClick,
  children,
  className,
  buttonType = "button",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      type={buttonType}
      className={`px-3 py-1 text-xl uppercase rounded bg-primary text-tertiary ${className} 
        ${!disabled && "hover:cursor-pointer hover:bg-accentPrimary"}
        ${disabled && "bg-secondary/50 text-white"}  
      `}
    >
      {children}
    </button>
  );
};

export default Button;
