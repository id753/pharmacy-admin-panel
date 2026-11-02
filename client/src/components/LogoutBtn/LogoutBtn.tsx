import { useNavigate } from "react-router-dom";
import css from "./LogoutBtn.module.css";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // await axios.post('/api/auth/logout');
      console.log("User logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <button
      type="button"
      className={css.logoutBtn}
      onClick={handleLogout}
      title="Logout"
    >
      <svg className={css.logoutIcon} width="12" height="13">
        <use href="/symbol-defs.svg#icon-logout" />
      </svg>
    </button>
  );
};

export default LogoutBtn;
