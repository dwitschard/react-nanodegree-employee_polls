const PollDetailHeader = ({ authorName, authorAvatarUrl }) => {
  return (
    <>
      <div>
        <span className="text-4xl text-secondary text-opacity-50">Poll of</span>
        <span className="pl-4 text-6xl">{authorName}</span>
      </div>
      <img
        src={authorAvatarUrl}
        alt={`Avatar of ${authorName}`}
        className="mt-4 rounded-2xl w-1/12"
      />
    </>
  );
};

export default PollDetailHeader;
