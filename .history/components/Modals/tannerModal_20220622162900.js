import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/MySite.Modals.module.css';

const TannerModal = ( {show, setshow} ) => {

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
            { show && (
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
                                <motion.div className={styles.closeBtn} onClick={() => {setshow(false)}}
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

                            </motion.div>


                            <motion.div
                                variants={modal}
                                className={styles.tannerModalThree}
                            >

                            </motion.div>


                            <motion.div
                                variants={modal}
                                className={styles.tannerModalFour}
                            >

                            </motion.div>

                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default TannerModal;