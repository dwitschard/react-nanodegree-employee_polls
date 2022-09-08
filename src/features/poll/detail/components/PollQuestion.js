import Button from "../../../../components/Button";

const PollQuestion = ({ poll, clickHandler }) => {
  const { optionOne, optionTwo } = poll;

  return (
    <div className="mt-8">
      <h1 className="text-3xl capitalize flex justify-center mb-4">
        Would you rather
      </h1>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col items-center justify-center">
          <div>{optionOne.text}</div>
          <Button handleClick={() => clickHandler(poll.id, optionOne)}>
            Option 1
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>{optionTwo.text}</div>
          <Button handleClick={() => clickHandler(poll.id, optionTwo)}>
            Option 2
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PollQuestion;
