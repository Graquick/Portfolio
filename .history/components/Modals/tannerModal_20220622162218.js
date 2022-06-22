import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/MySite.Modals.module.css';

const TannerModal = ( {showJModal, setShowJModal} ) => {

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
            { showJModal && (
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
                                <motion.div className={styles.closeBtn} onClick={() => {setShowJModal(false)}}
                                    whileTap={{ scale: 0.5, transition: { duration: .1 } }}
                                >
                                    <Icon icon="eva:close-fill"/>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                variants={modal}
                                className={styles.tannerModal}
                            >

                            </motion.div>

                            <motion.div
                                variants={modal}
                                className={styles.tannerModalTwo}
                            >
                                <div>
                                    <h1>
                                        <div className={styles.bfBlogLogo}>bf</div>
                                        <div className={styles.bfBlogLogo2}>blog</div>
                                    </h1>
                                    <p className="text-[1.3rem] font-medium text-black">My own Blog site! There, you&apos;ll find different types of posts from both my personal and work life.</p>
                                    <br />
                                    <p className="text-[1.3rem] font-medium text-black">Check out the full description at my projects page.</p>
                                </div>
                            </motion.div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default TannerModal;