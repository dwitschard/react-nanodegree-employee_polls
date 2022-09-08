import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DashboardPage from "./features/dashboard/DashboardPage";
import LoginPage from "./features/login/LoginPage";
import LeaderboardPage from "./features/leaderboard/LeaderboardPage";
import PollCreatePage from "./features/poll/create/PollCreatePage";
import PollOverviewPage from "./features/poll/overview/PollOverviewPage";
import NotFoundPage from "./features/404/NotFoundPage";
import Navbar from "./components/Navbar";
import PollDetailPage from "./features/poll/detail/PollDetailPage";
import LogoutPage from "./features/logout/LogoutPage";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "./features/login/state/loginReducer";
import { useEffect } from "react";

const CoreRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route
        path="/polls"
        element={<Navigate to="/polls/overview" replace />}
      />
      <Route path="/questions/overview" element={<PollOverviewPage />} />
      <Route path="/add" element={<PollCreatePage />} />
      <Route path="/questions/:questionId" element={<PollDetailPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  const isNavbarShownAt = ({ pathname }) =>
    pathname !== "/" && pathname !== "/logout";

  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser === null) {
      const previousLocation = location.pathname;
      navigate(`/?redirect=${previousLocation}`);
    }
  }, []);

  return (
    <>
      <Navbar
        isShown={(location) => isNavbarShownAt(location)}
        currentUser={currentUser}
      />
      <CoreRoutes />
    </>
  );
}

export default App;
