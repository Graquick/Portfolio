import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from '@iconify/react';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display: 'flex',
    visibility: 'visible'
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    transitionEnd: {
      display: 'none',
      visibility: 'hidden'
    }
  }
};

const parentVariants = {
  open: {
    opacity: 1,
    transition: {
      opacity: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07, delayChildren: 0.2
    },
    transitionEnd: {
      display: 'flex',
      visibility: 'visible'
    }
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: { stiffness: 1000 },
      staggerChildren: 0.05, staggerDirection: -1
    },
    transitionEnd: {
      display: 'none',
      visibility: 'hidden'
    }
  }
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];


export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const links = [
    { id: 1, title: 'home', href: '/', icon: 'ic:round-home'},
    { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
    { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' },
    { id: 4, title: 'github', href: 'https://github.com/Graquick', icon: 'akar-icons:github-fill'},
    { id: 5, title: 'linkedin', href: 'https://linkedin.com/in/brima-freeman-34aa05238', icon: 'akar-icons:linkedin-box-fill'},
  ]

  const li = motion.li

  return (
    <motion.div className="absolute top-[100px] left-0 w-[300px] h-[350px] pl-[50px] hidden invisible flex-col z-10"
      variants={parentVariants}
    >
      {links.map((links) => (
        <motion.li
          key={links.id}
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-[175px] h-[50px] uppercase text-[1.75rem] my-2 mx-0 flex text-black dark:text-white">
            <Link href={links.href}>
              {links.title}
            </Link>
            <Icon icon={links.icon} className="ml-[10px] text-[28px] relative top-1" />
          </div>
        </motion.li>
      ))}
    </motion.div>
  );
};
