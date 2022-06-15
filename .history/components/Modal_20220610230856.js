import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal} ) => {

    const 

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