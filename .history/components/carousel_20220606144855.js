import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Carousel.module.css'


export default function Carousel() {
    return (
        <div className="bg-blue-200 w-3/5 h-72 mt-12">
            <motion.div className={styles.carousel}>
                <motion.div className={styles.innerCarousel}>
                <Image src={`/${tags.src}.jpg`}
                                alt="something should show here"
                                width={140} height={210} layout="responsive"
                                blurDataURL='`${tags.src}.jpg`'
                                placeholder='blur' />
                </motion.div>
            </motion.div>
        </div>
    )
}