import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
                        <p style={{
                            color: "#fff"
                        }}>Want to make another pizza?</p>
                        <div style={{
                            color: "#fff",
                            border: "solid 1px #fff",
                            fontWeight: "bold",
                            padding: "0.5rem",
                            margin: "20px auto 0",
                            borderRadius: 30,
                            maxWidth: 100,
                            cursor: "pointer"
                        }} onClick={() => {setShowModal(false)}}>
                            Close
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default HtmlModal;