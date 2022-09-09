import CreatePoll from "./components/CreatePoll";
import { useNavigate } from "react-router-dom";

const PollCreatePage = () => {
  const navigate = useNavigate();

  const handlePollSubmission = (formValues) => {
    // TODO persist newly created Poll!
    console.log(formValues);
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
