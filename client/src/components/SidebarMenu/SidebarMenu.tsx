import { NavLink } from "react-router-dom";
import css from "./SidebarMenu.module.css";

const menuItems = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/products", label: "Products" },
  { path: "/orders", label: "Orders" },
  { path: "/suppliers", label: "Suppliers" },
  { path: "/customers", label: "Customers" },
];

const SidebarMenu = () => {
  return (
    <nav className={css.menu}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarMenu;
