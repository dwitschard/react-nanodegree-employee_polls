const Card = ({ title, subtitle, children }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg border border-white shadow-2xl md:flex-row md:max-w-xl">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
          {title}
        </h5>
        <div className="text-secondary -mt-2 text-opacity-80">{subtitle}</div>
        <div className="mb-3 mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Card;
