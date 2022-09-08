import { useDispatch } from "react-redux";
import {
  addAuthenticatedUser,
  removeAuthenticatedUser,
} from "./state/loginReducer";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const LoginPage = ({ redirectAfterLogout = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    dispatch(addAuthenticatedUser(user));
    navigate(searchParams.get("redirect") || "/dashboard");
  };

  useEffect(() => {
    if (redirectAfterLogout) {
      dispatch(removeAuthenticatedUser(user));
    }
  }, [redirectAfterLogout]);

  const isSubmitActive = () => user !== null;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-xl uppercase text-secondary">Select a User</div>
      <select
        className="ml-4 text-2xl p-3 outline-0"
        onChange={(e) => setUser(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Select
        </option>
        <option value="John">John</option>
        <option value="Jane">Jane</option>
        <option value="Mike">Mike</option>
      </select>
      <button
        disabled={!isSubmitActive()}
        onClick={handleLogin}
        type="button"
        className="ml-5 px-3 py-1 text-xl uppercase rounded bg-primary hover:cursor-pointer text-tertiary hover:bg-accentPrimary"
      >
        Go
      </button>
    </div>
  );
};

export default LoginPage;
