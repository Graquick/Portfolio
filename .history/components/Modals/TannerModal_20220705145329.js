import React, { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/MySite.Modals.module.css';

const TannerModal = ( {showTannerModal, setShowTannerModal} ) => {

    let [count, setCount] = useState(0)
    let [ref, {width}] = useMeasure()
    let [refh, {height}] = useMeasure()
    let [tuple, setTuple] = useState([null, count]) // [previous, current]

    if (tuple[1] !== count) {
        setTuple([tuple[1], count])
    }
    
    let prev = tuple[0]
    let direction = count > prev ? 1 : -1


    const backDrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const modal = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { delay: .25 }
        }
    }

    let variants = {
        enter: ({direction, width}) => ({ x: direction * width }),
        center: { x: 0 },
        exit: ({direction, width}) => ({ x: direction * -width }),
    }
    
    let images = ["bg-[url('/tanner-big-1-hero.PNG')]", "bg-[url('/tanner-big-2-hero.PNG')]", "bg-[url('/tanner-big-3-hero.PNG')]", "bg-[url('/tanner-big-4-hero.PNG')]"]
    let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"]

    return (
        <AnimatePresence exitBeforeEnter>
            { showTannerModal && (
                <motion.div className="backdrop"
                    variants={backDrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        variants={modal}
                        className="m-auto absolute top-0 left-0 bottom-0 right-0 w-[1500px] h-[900px] flex flex-col justify-center align-center bg-[#dedede] 2xl:w-[1000px] xl:w-[750px] lg:w-[355px]"
                    >
                            <motion.div className={styles.closeBar}
                            >
                                <Icon icon="clarity:window-min-line" style={{ color: "#a8a8a8" }}/>
                                <Icon icon="mdi:window-restore" style={{ color: "#a8a8a8" }}/>
                                <motion.div className={styles.closeBtn} onClick={() => {setShowTannerModal(false)}}
                                    whileTap={{ scale: 0.5, transition: { duration: .1 } }}
                                >
                                    <Icon icon="eva:close-fill"/>
                                </motion.div>
                            </motion.div>

                            <div className="w-[25%] flex items-center justify-between">
                                <div className="absolute top-0 m-auto left-[-4rem] bottom-0 w-fit h-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white lg:left-0 z-10" onClick={() => setCount(count - 1)
                                }
                                >
                                   <Icon icon="bx:chevron-left"></Icon>
                                </div>
                                <div className="absolute top-0 m-auto right-[-4rem] bottom-0 w-fit h-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white lg:right-0 z-10" onClick={() => setCount(count + 1)
                               }>
                                     <Icon icon="bx:chevron-right"></Icon>
                                </div>
                            </div>

                            <div ref={ref}  className="self-center flex items-center justify-center overflow-hidden bg-black/50 h-full w-full relative" >
                                <AnimatePresence custom={{direction, width}}>
                                    <motion.div className={`w-[1400px] h-[900px] ${images[Math.abs(count) % 4]} absolute bg-cover justify-center text-white cursor-default 2xl:w-[1000px] xl:w-[650px] lg:w-[255px]`}
                                        key={count}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        custom={{direction, width}}
                                    >
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            

                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}

export default TannerModal;