import Button from "../../../../components/Button";
import { useState } from "react";

const CreatePoll = ({ onCreation }) => {
  const [formValues, setFormValues] = useState({
    optionOne: "",
    optionTwo: "",
  });

  const handleOnCreate = (e) => {
    e.preventDefault();
    onCreation(formValues);
  };

  function isFormValid() {
    const { optionOne, optionTwo } = formValues;
    return optionOne.trim() !== "" && optionTwo.trim() !== "";
  }
  return (
    <form onSubmit={handleOnCreate}>
      <div className="flex flex-col gap-2">
        <label htmlFor="optionOne">First Option</label>
        <input
          className="border border-secondary/50 p-2"
          type="text"
          id="optionOne"
          placeholder="Enter Option 1"
          onChange={(e) =>
            setFormValues({ ...formValues, optionOne: e.target.value })
          }
        />
        <div className="border-t-2 border-secondary mt-4 mb-4"></div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="optionTwo">Second Option</label>
        <input
          type="text"
          className="border border-secondary/50 p-2"
          id="optionTwo"
          placeholder="Enter Option 2"
          onChange={(e) =>
            setFormValues({ ...formValues, optionTwo: e.target.value })
          }
        />
      </div>
      <div className="border-t-2 border-secondary mt-4 mb-4"></div>
      <Button buttonType="submit" disabled={!isFormValid()}>
        Submit Question
      </Button>
    </form>
  );
};

export default CreatePoll;
