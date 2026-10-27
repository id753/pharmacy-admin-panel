import SidebarMenu from "../SidebarMenu/SidebarMenu";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={css.sidebar}>
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
