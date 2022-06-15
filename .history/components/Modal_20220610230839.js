import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal} ) => {
    return ( 
        return (
            <AnimatePresence exitBeforeEnter>
                { showModal && (
                    <motion.div className>

                    </motion.div>
                ) }
            </AnimatePresence>
        )
     );
}
 
export default Modal;