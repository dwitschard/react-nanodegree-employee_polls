import { useSelector } from "react-redux";
import { selectCurrentUser } from "../login/state/loginReducer";
import Welcome from "../../components/Welcome";
import PollCard from "./components/PollCard";
import { selectPolls } from "../poll/state/pollReducer";
import { formatDate } from "../../helpers/date";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const user = useSelector(selectCurrentUser);
  const polls = useSelector(selectPolls);
  const navigate = useNavigate();

  const getAllPolls = Object.keys(polls).reduce(
    (acc, curr) => [...acc, polls[curr]],
    []
  );
  const getNewPolls = getAllPolls.filter(
    (poll) => ![...poll.optionOne.votes, ...poll.optionTwo.votes].includes(user)
  );

  const getAnsweredPolls = getAllPolls.filter((poll) =>
    [...poll.optionOne.votes, ...poll.optionTwo.votes].includes(user)
  );

  const createPollList = (name, polls) => {
    return (
      <>
        <div className="text-3xl mt-8 uppercase">{name}</div>
        <div className="grid grid-cols-3 gap-5 mt-3">
          {polls
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((poll) => (
              <PollCard
                key={poll.id}
                title={poll.author}
                subtitle={formatDate(poll.timestamp)}
                handleDetailClick={() => navigate(`/questions/${poll.id}`)}
              />
            ))}
        </div>
      </>
    );
  };
  return (
    <div className="m-5">
      <Welcome userName={user} />
      {createPollList("New Questions", getNewPolls)}
      {createPollList("Done", getAnsweredPolls)}
    </div>
  );
};

export default DashboardPage;
