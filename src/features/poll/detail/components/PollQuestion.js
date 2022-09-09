import Button from "../../../../components/Button";
import PollQuestionStats from "./PollQuestionStats";

const PollQuestion = ({ poll, clickHandler, currentUser, isDisabled }) => {
  const { optionOne, optionTwo } = poll;

  const totalAnswers =
    (optionOne.votes || []).length + (optionTwo.votes || []).length;

  function calculatePercentage(numberOfVotes) {
    const percentage = 100 * (numberOfVotes / totalAnswers);
    return percentage % 1 === 0 ? percentage.toFixed(0) : percentage.toFixed(1);
  }

  const isSelected = (option, currentUser) =>
    option.votes.includes(currentUser);

  const handleClickIfEnabled = () =>
    !isDisabled && clickHandler(poll.id, "optionTwo");

  return (
    <div className="mt-8">
      <h1 className="text-3xl capitalize flex justify-center mb-4">
        Would you rather {isDisabled ? "disabled" : "enabled"}
      </h1>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col items-center justify-center">
          <div>{optionOne.text}</div>
          <Button
            className={
              isSelected(optionOne, currentUser) &&
              "border-4 border-accentPrimary"
            }
            disabled={isDisabled}
            handleClick={() => clickHandler(poll.id, "optionOne")}
          >
            Option 1
          </Button>
          <PollQuestionStats
            numberOfPeople={optionOne.votes.length}
            percentage={calculatePercentage(optionOne.votes.length)}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>{optionTwo.text}</div>
          <Button
            className={
              isSelected(optionTwo, currentUser) &&
              "border-4 border-accentPrimary"
            }
            disabled={isDisabled}
            handleClick={handleClickIfEnabled}
          >
            Option 2
          </Button>
          <PollQuestionStats
            numberOfPeople={optionTwo.votes.length}
            percentage={calculatePercentage(optionTwo.votes.length)}
          />
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
