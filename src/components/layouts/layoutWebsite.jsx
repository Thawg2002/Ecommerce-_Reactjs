import React from "react";
import HeaderWebsite from "../HeaderWebsite";
import FooterWebsite from "../FooterWebsite";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div>
      <div>
        <HeaderWebsite />

        <main>
          <Outlet />
          
        </main>
        <FooterWebsite />
      </div>
    </div>
  );
};

export default LayoutWebsite;
