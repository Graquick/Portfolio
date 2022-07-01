import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "../SideBar/menuToggle";
import { Navigation } from "../SideBar/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      delay: 0.25
    }
  }),
  closed: {
    clipPath: "circle(30px at 246px 48.5px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="absolute top-0 w-[300px] right-0 bottom-0 h-screen bg-gray-200 shadow-md hidden invisible z-1 xl:visible xl:block dark:bg-neutral-800" variants={sidebar}>
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </motion.nav>
  );
};