const Welcome = ({ userName }) => {
  return (
    <div className="flex-1 p-8 rounded drop-shadow-lg p-5 bg-primary text-white">
      <span className="text-xl">Welcome</span>
      <span className="text-2xl pl-2 uppercase ">{userName}.</span>
    </div>
  );
};

export default Welcome;
