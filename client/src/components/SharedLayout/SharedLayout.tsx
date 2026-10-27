import css from "./SharedLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <div className={css.mainContent}>
        <Header />
        <main className={css.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default SharedLayout;
