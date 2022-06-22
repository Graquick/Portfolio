import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/MySite.Modals.module.css';

const TannerModal = ( {showTannerModal, setShowTannerModal} ) => {

    let [count, setCount] = useState(1)
    let [prev, setPrev] = useState(count)

    console.log(`Previous: ${prev}`, `Current: ${count}`)


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
            { showTannerModal && (
                <motion.div className="backdrop"
                    variants={backDrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        variants={modal}
                        className="m-auto absolute top-0 left-0 bottom-0 right-0 w-[1400px] h-[800px] flex flex-col justify-center align-center bg-slate-400"
                    >
                            <motion.div className={styles.closeBar}
                            >
                                <Icon icon="clarity:window-min-line" style={{ color: "#a8a8a8" }}/>
                                <Icon icon="mdi:window-restore" style={{ color: "#a8a8a8" }}/>
                                <motion.div className={styles.closeBtn} onClick={() => {setShowTannerModal(false)}}
                                    whileTap={{ scale: 0.5, transition: { duration: .1 } }}
                                >
                                    <Icon icon="eva:close-fill"/>
                                </motion.div>
                            </motion.div>

                            <div className="w-[25%] flex items-center justify-between">
                                <div className="absolute top-0 m-auto left-[-4rem] bottom-0 rounded-xl w-fit h-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white" onClick={() => { setCount(count - 1)
                                     setPrev(count)
                                    }
                                }
                                >
                                   <Icon icon="uil:angle-left"></Icon>
                                </div>
                                <div className="absolute top-0 m-auto right-[-4rem] bottom-0 rounded-xl w-fit h-fit flex justify-center items-center font-bold text-[3rem] transition-all duration-150 ease-in-out active:transform active:scale-50 cursor-pointer 
                                text-white hover:text-black hover:bg-white" onClick={() => { setCount(count + 1)
                                    setPrev(count)
                                   }
                               }>
                                     <Icon icon="uil:angle-right"></Icon>
                                </div>
                            </div>

                            <div className="self-center flex items-center justify-center overflow-hidden bg-black/50 h-24 w-24 relative" >
                                <AnimatePresence>
                                    <motion.div className={`w-20 h-20 ${colors[Math.abs(count) % 4]} flex items-center text-[1rem] font-bold font-roboto absolute justify-center text-white cursor-default`}
                                        key={count}
                                        exit={{ x: -100 }}
                                        initial={{ x: 100 }}
                                        animate={{ x: 0 }}
                                       // transition={{ duration: 1 }}
                                    >
                                        {count}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="self-center flex items-center mt-8 justify-around overflow-hidden bg-black/25 h-12 w-80 relative">
                                    {numbers.map((num) => {
                                        return (
                                            <div key={num}
                                            className={`w-8 h-8 ${colors.map{(col) => {
                                                return (
                                                    <div>
                                                    </div>
                                                )
                                            }}}`}
                                            >

                                            </div>
                                        )
                                    })}

                                    {/* <div className={`w-8 h-8 ${colors[Math.abs(count)]}`}>
                                    </div>

                                    <div className={`w-8 h-8 ${colors[Math.abs(count)+1]}`}>
                                    </div>

                                    <div className={`w-8 h-8 ${colors[Math.abs(count)+2]}`}>
                                    </div>

                                    <div className={`w-8 h-8 ${colors[Math.abs(count)+3]}`}>
                                    </div> */}
                            </div>

                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
     );
}

let numbers = [1, 2, 3, 4]
let colors = ["bg-red-500", "bg-blue-500", "bg-green-500","bg-yellow-500"]

export default TannerModal;