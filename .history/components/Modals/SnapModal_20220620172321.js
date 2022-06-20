import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/Modals.module.css';

const SnapModal = ( {showModal, setShowModal} ) => {

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
            { showModal && (
                <motion.div className="backdrop"
                    variants={backDrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        variants={modal}
                        // className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[800px] h-[400px] bg-[url('/snap-hero.PNG')] bg-cover shadow-md grid grid-cols-1 grid-rows-1 p-8 text-left"
                        className={styles.snapModal}
                    >
                        <div>
                            <h1><svg className="absolute top-[2.5rem] -right-[2.25rem] w-[26px] h-[26px] fill-black stroke-black"
                            width={26}
                            height={24}
                            viewBox="0 0 26 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            >
                            <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className="fill-white"/>
                            <rect
                                x="1.2"
                                y="1.2"
                                width="17.6"
                                height="17.6"
                                rx="1.8"    
                                strokeWidth="2.4"
                            />
                            <circle cx={13} cy={7} r="2.5" className="stroke-white"/>
                            </svg>snap</h1>
                            <p className="text-[1.3rem] font-medium text-black">An intro section with a dropdown navigation. Includes dropdown navigation menus.</p>
                            <br />
                            <p className="text-[1.3rem] font-medium text-black">Check out the full description at my projects page.</p>
                            <motion.div className={styles.closeBar}
                            >
                                <Icon icon="clarity:window-min-line" style={{ color: "#a8a8a8" }}/>
                                <Icon icon="mdi:window-restore" style={{ color: "#a8a8a8" }}/>
                                <motion.div className={styles.closeBtn} onClick={() => {setShowModal(false)}}
                                    whileTap={{ scale: 0.5, transition: { duration: .1 } }}
                                >
                                    <Icon icon="eva:close-fill"/>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default SnapModal;