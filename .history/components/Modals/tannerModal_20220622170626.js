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
                        className={styles.tannerModalCont}
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

                        <div>
                            <div className="p-8 bg-white rounded-lg w-fit h-10 flex justify-center items-center font-bold text-lg transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer hover:text-white hover:bg-blue-900">
                                Previous
                            </div>
                            <div className="p-8 bg-white rounded-lg w-fit h-10 flex justify-center items-center font-bold text-lg transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer hover:text-white hover:bg-red-900">
                                Next
                            </div>
                        </div>
                            <div>
                                {count}
                            </div>

                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default TannerModal;