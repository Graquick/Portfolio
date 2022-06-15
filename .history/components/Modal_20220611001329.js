import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal, setShowModal} ) => {

    const backDrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: 200,
            opacity: 1,
            transition: { delay: .5 }
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
                        style={{
                            background: "white",
                            maxWidth: 400,
                            margin: "0 auto",
                            padding: "40px 20px",
                            borderRadius: 10,
                            textAlign: "center"
                        }}
                    >
                        <p>Want to make another pizza?</p>
                        <div style={{
                            color: "#444",
                            border: "solid 1px #444",
                            fontWeight: "bold",
                            padding: "0.5rem",
                            margin: "20px auto 0",
                            borderRadius: 30,
                            maxWidth: 100,
                            cursor: "pointer"
                        }} onClic={() => {}}>
                            Close
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default Modal;