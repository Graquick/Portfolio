import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal} ) => {

    const backDrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    return ( 
        return (
            <AnimatePresence exitBeforeEnter>
                { showModal && (
                    <motion.div className="backdrop"
                        initial=""
                    >
                        
                    </motion.div>
                ) }
            </AnimatePresence>
        )
     );
}
 
export default Modal;