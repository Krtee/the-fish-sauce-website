"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuIcon from "../../public/images/menu.svg";
import Logo from "./../../public/logo.svg";
import { motion } from "framer-motion";

export interface NavigationProps {
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const sideDrawerClosedHandler = () => {
    setIsOpen(false);

    console.log("hello");

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const showSidebar = () => {
    setIsOpen(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  console.log(isOpen);

  return (
    <div className="border-b-2 border-primary flex flex-row justify-between">
      <div className="max-w-48	py-4 px-8 ">
        <Logo className="text-primary min-w-24" />
      </div>
      <div className="p-4">
        <MenuIcon onClick={() => showSidebar()} color="white" />
      </div>

      <motion.div
        layout
        initial={{ borderRadius: 70 }}
        className={`menu-container bg-fish-beige 	 ${
          isOpen ? "w-6/5 h-6/5 bg-pink" : " w-px h-px"
        }  `}
        transition={{ duration: 0.5 }}
      >
        <div onClick={() => sideDrawerClosedHandler()} className="p-30">
          <p>{t("menu.title")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Navigation;
