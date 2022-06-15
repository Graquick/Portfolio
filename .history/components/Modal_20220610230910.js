import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal} ) => {

    const backDrop = {
        visible: { opacity: 1 }
    }

    return ( 
        return (
            <AnimatePresence exitBeforeEnter>
                { showModal && (
                    <motion.div className="backdrop">
                        
                    </motion.div>
                ) }
            </AnimatePresence>
        )
     );
}
 
export default Modal;