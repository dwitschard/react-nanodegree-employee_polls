import { useSelector } from "react-redux";
import { selectCurrentUser } from "../login/state/loginReducer";
import Welcome from "../../components/Welcome";
import PollCard from "./components/PollCard";

const DashboardPage = () => {
  const user = useSelector(selectCurrentUser);

  const handleDetailClick = () => {
    console.log("view details of");
  };

  return (
    <div className="m-5">
      <Welcome userName={user} />
      <PollCard
        title="My Title"
        subtitle="Subtitle"
        handleDetailClick={handleDetailClick}
      />
    </div>
  );
};

export default DashboardPage;
