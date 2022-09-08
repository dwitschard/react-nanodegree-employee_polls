import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ isShown }) => {
  const location = useLocation();

  return (
    isShown(location) && (
      <div className="flex-1 bg-secondary">
        <ul className="text-tertiary flex justify-between">
          <div className="flex">
            <li>
              <NavbarButton text="Dashboard" link="/dashboard" />
            </li>
            <li>
              <NavbarButton text="Leaderboard" link="/leaderboard" />
            </li>
            <li>
              <NavbarButton text="New" link="/add" />
            </li>
          </div>
          <div className="flex">
            <li className="justify-self-end">
              <NavbarButton text="Logout" link="/logout" />
            </li>
          </div>
        </ul>
      </div>
    )
  );
};

const NavbarButton = ({ text, link }) => {
  let navigate = useNavigate();

  return (
    <button
      className="text-tertiary p-3 hover:bg-primary"
      onClick={() => navigate(link)}
    >
      <span>{text}</span>
    </button>
  );
};

export default Navbar;
