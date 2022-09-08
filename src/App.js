import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./features/dashboard/DashboardPage";
import LoginPage from "./features/login/LoginPage";
import LeaderboardPage from "./features/leaderboard/LeaderboardPage";
import PollCreatePage from "./features/poll/create/PollCreatePage";
import PollOverviewPage from "./features/poll/overview/PollOverviewPage";
import NotFoundPage from "./features/404/NotFoundPage";
import Navbar from "./components/Navbar";
import PollDetailPage from "./features/poll/detail/PollDetailPage";
import LogoutPage from "./features/logout/LogoutPage";

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

  return (
    <>
      <BrowserRouter>
        <Navbar isShown={(location) => isNavbarShownAt(location)} />
        <CoreRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
