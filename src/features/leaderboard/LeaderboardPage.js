import LeaderboardHeader from "./components/LeaderboardHeader";
import { useSelector } from "react-redux";
import { selectLeaderboardInformation } from "../login/state/loginReducer";
import LeaderboardTable from "./components/LeaderboardTable";

const LeaderboardPage = () => {
  const users = useSelector(selectLeaderboardInformation);

  return (
    <div className="m-5 flex flex-col gap-5">
      <LeaderboardHeader />
      <LeaderboardTable users={users} />
    </div>
  );
};

export default LeaderboardPage;
