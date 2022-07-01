import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import { useTheme } from 'next-themes';

function SideBar() {
    const [open, setOpen] = useState(false);

    const variantsIcon = {
        opened: {
            rotate: 90
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        opened: {
            x: 0,
            display: "block"
        },
        closed: {
            x: 350,
            transitionEnd: {
                display: "none"
            }
        }
    }

  return (
    <>
        <AnimatePresence>
            <motion.div
                variants={variantsIcon}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
                <Icon icon={open ? "ei:close" : "clarity:bars-line"} />
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default SideBar