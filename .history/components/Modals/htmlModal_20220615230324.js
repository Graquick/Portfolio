import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
                        style={{
                            background: "blue",
                            width: 400,
                            margin: "auto",
                            padding: "40px 20px",
                            borderRadius: 10,
                            textAlign: "center",
                            position: "absolute",
                            top: 0, left: 0, bottom: 0, right: 0,
                        }}
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