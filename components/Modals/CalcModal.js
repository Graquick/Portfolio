import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import styles from "../../styles/Modals.module.css";

const CalcModal = ({ showRModal, setShowRModal }) => {
  const backDrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.25 },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showRModal && (
        <motion.div
          className="backdrop"
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal} className={styles.calcModal}>
            <div>
              <h1 className=" text-[2.3rem] capitalize mb-12 xl:mb-2 xl:text-[1.8rem]text-black">
                Todo App
              </h1>
              <p className="text-[1.3rem] font-medium xl:text-[1.1rem] text-black">
                Here&apos;s my cool todo app which allows you to add and update
                todo items on a list. I had so much fun creating this one.
              </p>
              <br />
              <p className="text-[1.3rem] font-medium xl:text-[1.1rem] text-black">
                Check out the full description at my projects page.
              </p>
              <motion.div className={styles.closeBar}>
                <Icon
                  icon="clarity:window-min-line"
                  style={{ color: "#a8a8a8" }}
                />
                <Icon icon="mdi:window-restore" style={{ color: "#a8a8a8" }} />
                <motion.div
                  className={styles.closeBtn}
                  onClick={() => {
                    setShowRModal(false);
                  }}
                  whileTap={{ scale: 0.5, transition: { duration: 0.1 } }}
                >
                  <Icon icon="eva:close-fill" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalcModal;
