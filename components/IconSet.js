import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';


const icons = [
    { id: 1, href: 'https://github.com/Graquick', icon: 'akar-icons:github-fill'},
    { id: 2, href: 'https://www.linkedin.com/in/brima-freeman-34aa05238', icon: 'akar-icons:linkedin-box-fill'},
    { id: 3, href: 'mailto:brimafreeman@outlook.com', icon: 'uil:envelopes'},
]

function Footer(props) {
    const router = useRouter();
  return (
    <>
            <div className="w-[230px] h-[24px] flex justify-between dark:text-white">
                {icons.map((ic, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.5 }}>
                        <Link href={ic.href} target="_blank">
                            <Icon icon={ic.icon} className="text-[24px] cursor-pointer"/>
                        </Link>
                    </motion.div>
                ))}
            </div>
    </>
  )
}

export default Footer