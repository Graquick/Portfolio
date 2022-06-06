import { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Carousel.module.css'


export default function Carousel() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        console.log(carousel.currentscrollWidth, carousel.current)
    })

    const images = [
        { id: 1, src: 'shoes'},
        { id: 1, src: 'sneakers'},
        { id: 1, src: 'me'},
        { id: 1, src: 'boots'}
    ]

    return (
        <div className="bg-blue-200 h-72 mt-12 w-1/4 h-96">
            <motion.div className={styles.carousel} >
                <motion.div className={styles.innerCarousel}
                    drag="x" dragConstraints={{ right: 0 }}
                >
                    {images.map((image) => {
                        return (
                            <motion.div className={styles.item}
                                key={image.id}
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