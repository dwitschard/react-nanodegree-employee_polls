import { useDispatch } from "react-redux";
import {
  addAuthenticatedUser,
  removeAuthenticatedUser,
} from "./state/loginReducer";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";

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
      <Button
        className="ml-5 "
        disabled={!isSubmitActive()}
        handleClick={handleLogin}
      >
        Go
      </Button>
    </div>
  );
};

export default LoginPage;
