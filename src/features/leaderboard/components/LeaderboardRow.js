const LeaderboardRow = ({
  user,
  avatarUrl,
  answers,
  questions,
  isHeaderRow = false,
}) => {
  return (
    <div
      className={`grid grid-cols-3 p-5 border border-tertiary ${
        !isHeaderRow && "hover:bg-secondary/25"
      }`}
    >
      <div className="flex flex-row items-center">
        {avatarUrl && (
          <img
            className="w-1/12 pr-4"
            src={avatarUrl}
            alt={`Avatar of User ${user}`}
          />
        )}
        <div>{user}</div>
      </div>
      <div>{answers}</div>
      <div>{questions}</div>
    </div>
  );
};

export default LeaderboardRow;
