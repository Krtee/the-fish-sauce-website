"use client";

import { motion, useCycle, useInView } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./../../public/logo.svg";
import { MenuItem } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./useDimensions";

export interface NavigationProps {
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const navigationRef = useRef(null);
  const navBarRef = useRef(null);
  const { height: navigationHeight } = useDimensions(navigationRef);

  const [isOpen, toggleOpen] = useCycle(false, true);
  const isInView = useInView(navBarRef);

  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const toggleOpenSidebar = () => {
    if (typeof window != "undefined" && window.document && isOpen) {
      document.body.style.overflow = "unset";
    } else if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
    toggleOpen();
  };

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 30px) 30px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(25px at calc(100% - 30px) 30px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className=" flex flex-row justify-between" ref={navBarRef}>
      <div className="max-w-48 max-h-24	py-4 px-8 ">
        <Logo className="text-primary min-w-24" />
      </div>
      <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle
          onClick={toggleOpenSidebar}
          color={isInView && !isOpen ? "white" : "#122e27"}
        />
      </motion.div>

      <motion.nav
        initial={false}
        className={`nav-container ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        ref={navigationRef}
        animate={isOpen ? "open" : "closed"}
        custom={navigationHeight}
      >
        <motion.div
          initial={false}
          className={`nav-background ${
            isInView && !isOpen ? "bg-fish-green" : "bg-fish-beige"
          }`}
          variants={sidebar}
        />
        <div className=" m-auto flex flex-col items-center gap-2 relative h-full">
          <motion.div
            variants={variants}
            className="px-4 py-40 flex flex-col gap-6 align-center justify-start h-full text-4xl "
          >
            <MenuItem
              className="relative  text-fish-green text-termina list-none	"
              key={1}
            >
              <p>{t("menu.lunch")}</p>
            </MenuItem>
            <MenuItem
              className="relative  text-fish-green text-termina list-none	"
              key={2}
            >
              <p>{t("menu.dinner")}</p>
            </MenuItem>
            <MenuItem
              className="relative  text-fish-green text-termina list-none	"
              key={3}
            >
              <p>{t("menu.drinks")}</p>
            </MenuItem>
            <MenuItem
              className="relative  text-fish-green text-termina list-none	"
              key={4}
            >
              <p>{t("nav.contact")}</p>
            </MenuItem>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
