import { motion } from "framer-motion";

export interface MenuItemProps {
  i?: number;
  props?: any;
  children?: React.ReactNode;
  onClick?: Function;
  className?: string;
}
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  props,
  onClick,
  className = "",
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      {...props}
      onClick={(e) => onClick?.(e)}
      className={className}
    >
      {children}
    </motion.li>
  );
};
