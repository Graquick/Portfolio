import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/MySite.Modals.module.css';

const TannerModal = ( {showTannerModal, setShowTannerModal} ) => {

    let [count, setCount] = useState(0)


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
                        className="m-auto absolute top-0 left-0 bottom-0 right-0 w-[800px] h-[400px] flex flex-col justify-around bg-slate-400"
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
                                <div className=" rounded-xl w-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white" onClick={() => setCount(count-1)}>
                                   <Icon icon="uil:angle-left"></Icon>
                                </div>
                                <div className=" rounded-xl w-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white" onClick={() => setCount(count + 1)}>
                                    Next
                                </div>
                            </div>
                            <div className="bg-green-400 text-xl font-bold " >
                                <div>
                                    {count}
                                </div>
                            </div>

                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default TannerModal;