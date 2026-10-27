import { NavLink } from "react-router-dom";
import css from "./SidebarMenu.module.css";

const menuItems = [
  { path: "/dashboard", label: "Dashboard", icon: "icon-dash" },
  { path: "/orders", label: "Orders", icon: "icon-order" },
  { path: "/products", label: "Products", icon: "icon-product" },
  { path: "/suppliers", label: "Suppliers", icon: "icon-supplier" },
  { path: "/customers", label: "Customers", icon: "icon-customer" },
];

const SidebarMenu = () => {
  return (
    <nav className={css.menu}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          title={item.label}
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          <svg width="12" height="12">
            <use href={`/symbol-defs.svg#${item.icon}`} />
          </svg>
        </NavLink>
      ))}
    </nav>
  );
};

export default SidebarMenu;
