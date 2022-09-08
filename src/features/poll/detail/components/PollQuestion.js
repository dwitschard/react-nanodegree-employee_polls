import Button from "../../../../components/Button";

const PollQuestion = ({ poll, clickHandler, currentUser, isDisabled }) => {
  const { optionOne, optionTwo } = poll;

  const isSelected = (option, currentUser) => {
    console.log(option);
    return option.votes.includes(currentUser);
  };

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
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
