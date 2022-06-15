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
                        color: "red",
                        border: "solid"
                        borderColor: "#444",
                        fontWeight: "bold",
                        marginTop: 10
                        }}>Hello</div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default Modal;