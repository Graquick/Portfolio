import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal, setShowModal} ) => {

    const backDrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backDrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        style={{
                            backgroundColor: "white",
                        }}
                    >
                        <p>Want to make another pizza?</p>
                        <Link href="/">
                            <a>Learn more</a>
                        </Link>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default Modal;