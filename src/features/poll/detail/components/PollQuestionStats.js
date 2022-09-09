const PollQuestionStats = ({ numberOfPeople, percentage }) => {
  return (
    <div>
      <div>Nr. of People: {numberOfPeople}</div>
      <div>{percentage}% of all Users</div>
    </div>
  );
};
export default PollQuestionStats;
