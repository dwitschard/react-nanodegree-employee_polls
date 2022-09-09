import LeaderboardRow from "./LeaderboardRow";

const LeaderboardTable = ({ users }) => {
  const sortByQuestionsAndAnswers = (a, b) =>
    b.answerNumber + b.questionsNumber - (a.answerNumber + a.questionsNumber);

  return (
    <div className="grid grid-rows-1">
      <LeaderboardRow
        user="User"
        answers="Answers"
        questions="Questions"
        isHeaderRow={true}
      />
      {users.sort(sortByQuestionsAndAnswers).map((user) => (
        <LeaderboardRow
          key={user.id}
          avatarUrl={user.avatarURL}
          user={user.id}
          answers={user.answerNumber}
          questions={user.questionsNumber}
        />
      ))}
    </div>
  );
};

export default LeaderboardTable;
