import { useDispatch, useSelector } from "react-redux";
import {
  addAuthenticatedUser,
  loadUsers,
  removeAuthenticatedUser,
  selectRegisteredUsers,
} from "./state/loginReducer";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";

const LoginPage = ({ redirectAfterLogout = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, _] = useSearchParams();
  const registeredUsers = useSelector(selectRegisteredUsers);

  const [user, setUser] = useState(null);

  const handleLogin = () => {
    dispatch(addAuthenticatedUser(user));
    navigate(searchParams.get("redirect") || "/dashboard");
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

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
        {Object.keys(registeredUsers)
          .map((key) => registeredUsers[key])
          .map((user) => (
            <option key={user.id} value={user.id}>
              {user.id}
            </option>
          ))}
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
