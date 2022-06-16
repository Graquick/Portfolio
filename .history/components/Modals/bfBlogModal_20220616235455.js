import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const JavaModal = ( {showJModal, setShowJModal} ) => {

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
            y: 250,
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
                        style={{
                            background: "yellow",
                            maxWidth: 400,
                            margin: "0 auto",
                            padding: "40px 20px",
                            borderRadius: 10,
                            textAlign: "center"
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
                        }} onClick={() => {setShowJModal(false)}}>
                            Close
                        </div>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}
 
export default bfB;