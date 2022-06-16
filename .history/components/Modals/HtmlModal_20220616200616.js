import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/Modals.module.css';

const HtmlModal = ( {showModal, setShowModal} ) => {

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
                        className={styles.Modal}
                    >
                        <div>
                            <h1><svg
                            width={26}
                            height={24}
                            viewBox="0 0 26 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            >
                            <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" stroke-width="2.4" className={styles.rectBehind} />
                            <rect
                                x="1.2"
                                y="1.2"
                                width="17.6"
                                height="17.6"
                                rx="1.8"    
                                stroke-width="2.4"
                            />
                            <circle cx={13} cy={7} r="2.5" />
                            </svg>snap</h1>
                            <p>An intro section with a dropdown navigation. I designed this by Figma. using Figma and developed by Next JS.</p>
                            <br />
                            <p>Check it out at my projects page.</p>
                            <motion.div className={styles.closeBtn} onClick={() => {setShowModal(false)}}
                                whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                                whileTap={{ scale: 0.9 }}
                            >
                                x
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default HtmlModal;