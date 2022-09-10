import CreatePoll from "./components/CreatePoll";
import { useNavigate } from "react-router-dom";
import { persistPoll } from "../state/pollReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../login/state/loginReducer";

const PollCreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const handlePollSubmission = (formValues) => {
    dispatch(
      persistPoll({
        poll: {
          optionOneText: formValues.optionOne,
          optionTwoText: formValues.optionTwo,
          author: user,
        },
      })
    );
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center h-screen flex-col mt-8">
      <div className="text-8xl">Would you rather</div>
      <div className="text-secondary/50 text-4xl mt-4 mb-8">
        Create your own poll
      </div>
      <CreatePoll onCreation={handlePollSubmission} />
    </div>
  );
};
export default PollCreatePage;
