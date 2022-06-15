import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Carousel.module.css'


export default function Carousel() {

    const [isVisible, setVisible] = useState(false)
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    const images = [
        { id: 1, src: 'map'},
        { id: 1, src: 'kiwi'},
        { id: 1, src: 'pumpkin'},
        { id: 1, src: 'mandarin'}
    ]

    return (
        <div>
            <motion.div className={styles.carousel} ref={carousel}>
                <motion.div className={styles.innerCarousel}
                    drag="x" dragConstraints={{ right: 0, left: -width }}
                >
                    {images.map((image) => {
                        return (
                            <motion.div className={styles.item}
                                key={image}
                                onTap={() => setVisible1(!isVisible1)}
                            >
                                <Image src={`/${image.src}.jpg`}
                                alt="something should show here"
                                width={140} height={210} layout="responsive"
                                objectFit={'cover'}
                                blurDataURL='`${image.src}.jpg`'
                                placeholder='blur' />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}