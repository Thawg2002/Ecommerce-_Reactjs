import React, { useEffect, useState } from "react";
import { menuList } from "../api/menu";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const fectData = async () => {
      try {
        const data = await menuList();
        setMenus(data);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };
    fectData();
  }, []);
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary sidebar_amin">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="sidebarMenuLabel">
           ADMIN
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            {menus.map((menu, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    className="nav-link d-flex align-items-center gap-2 active"
                    aria-current="page"
                    to={menu.path}
                  >
                    <svg className="bi">
                      <use xlinkHref="#house-fill" />
                    </svg>
                    {menu.Label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
