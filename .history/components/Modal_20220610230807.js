import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ( {showModal} ) => {
    return ( 
        return (
            <AnimatePresence exitBeforeEnter>
                { showModal  }
            </AnimatePresence>
        )
     );
}
 
export default Modal;