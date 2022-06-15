import * as React from 'react';
import Link from 'next/link';
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
                        className={styles.htmlModal}
                    >
                        <div>
                            <h1>HTML</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt laborum repellat ipsam magnam nihil, adipisci.</p>
                            <motion.div className={styles.closeBtn} onClick={() => {setShowModal(false)}}
                                whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                                whileTap={{ scale: 0.9 }}
                            >
                                Close
                            </motion.div>
                        </div>
                        
                        <div>
                            <Image/>
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default HtmlModal;