import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import styles from '../styles/Contact.module.css'

import Header from '../components/header'
import Footer from '../components/footer';


const Contact = () => {

    const gridVariants = {
        hidden: {
          y: 100,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.4
          }
        }
      };

    const pageLoad = {
        exit: {
            y: -200
        },
        hidden: {
            y: -200
        },
        visible: {
            y: 0,
            transition: {
                delay: .75
            }
        }
      };
      
      const pageNotLoad = {
        exit: {
            y: -200
        },
        hidden: {
            y: 0
        },
        visible: {
            y: 0,
            transition: {
                delay: .75
            }
        }
      };

    const container = {
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: .6,
          },
        },
        hidden: {
          x: "100vw",
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
        exit: {
          x: "100vw",
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        }
      }
    
      const children = {
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: "100vw",
          opacity: 0,
          transition : {
            type: "spring",
            mass: .7
          }
        }
      }

    //   const { register, formState: { errors }, handleSubmit } = useForm({ criteriaMode: "all" });


      const cardIconsParent = [
          { id: 1, title: "Address:", pholder: "198 West 21th Street, Suite 721", icon: "ci:location"},
          { id: 2, title: "Phone:", pholder: "+ 1235 2355 98", icon: "bxs:phone"},
          { id: 3, title: "Email:", pholder: "info@yoursite.com", icon: "ic:round-email"}
        ]

    return ( 
        <div className="px-5 py-0 transition duration-500 bg-gray-200 dark:bg-neutral-800">
            <Head>
                <title>NEW! Home - Brima Freeman</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header variants={pageNotLoad} />

            <motion.main className={styles.main}
                initial="hidden"
                animate="visible"
            // className={styles.main}
            >
                <h1 className={styles.title}>
                    Contact
                </h1>

                <p className={styles.description}>
                    Start by filling in the form, and I will get back to you as soon as possible.
                </p>

                <motion.div className={styles.grid} variants={gridVariants}>
                    <div className="flex flex-col px-12 py-4 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50">
                        <h1>Let&apos;s get in touch</h1>
                        <p >I&apos;m looking forward to working on a new project with you.</p>

                        <div className={styles.cardIconCont}>
                            {cardIconsParent.map((cards, i) => (
                                <div className={styles.cardIconsParent}
                                    key={cards.id}>
                                    <div className={styles.cardIcon}>
                                        <Icon className={styles.Icon} icon={cards.icon} />
                                    </div>
                                    
                                    <div className={styles.cardIconText}>
                                        <h3>{cards.title}</h3>
                                        <p>{cards.pholder}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className={styles.cardI}
                    action="/success" id="form" name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>Get in touch</h1>

                        <div className={styles.formContent}>
                            <div className={styles.formNameContent}>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="fullname">full name</label>
                                    <input name="fullname" type="text" id="fullname" placeholder="Name" required
                                    // style={errors.fullname ? { border: "solid 1.5px #ed4337" } : null} {...register("fullname", { required: true, minLength: 5 })}
                                    /> 
                                    {/* {errors.fullname?.type === "required" && <p>Please enter your full name.</p>}
                                    {errors.fullname?.type === "minLength" && <p>Your name must be at least 5 characters long.</p>} */}
                                    
                                </div>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="email">email address</label>
                                    <input name="email" type="email" id="email" placeholder="Email" required
                                    // style={errors.email ? { border: "solid 1.5px #ed4337" } : null} {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "This is not a valid email address." } })}
                                    />
                                    {/* {errors.email?.type === "required" && <p>You must enter your email.</p>}
                                    {errors.email?.type === "pattern" && <p>Please include an &quot;@&quot; in the email.</p>} */}
                                </div>
                            </div>

                            <div className={styles.MessageContent}>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="subject">subject</label>
                                    <input name="subject" type="text" id="subject" placeholder="Subject" required
                                    // style={errors.subject ? { border: "solid 1.5px #ed4337" } : null} {...register("subject", { required: true })}
                                    />
                                    {/* {errors.subject?.type === "required" && <p>Your message needs a subject.</p>} */}
                                </div>
                                <div className={styles.tArea}
                                >
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message" rows="5" cols="1" required
                                    // style={errors.message ? { border: "solid 1.5px #ed4337" } : null}  {...register("message", { required: true, minLength: 5, maxLength: 1000 })}
                                    >
                                    </textarea>
                                    {/* {errors.message?.type === "required" && <p>Please enter your message.</p>}
                                    {errors.message?.type === "minLength" && <p>Your message must be at least 100 characters.</p>}
                                    {errors.message?.type === "maxLength" && <p>Your message cannot exceed 1000 characters.</p>} */}
                                </div>
                            </div>
                        </div>

                        <motion.div className={styles.formBtn}
                            whileHover={{ x: 10, transition: { duration: .1 }}}
                            whileTap={{ scale: 0.9 }}
                        >
                            <input type="submit" value="Send Message" /> &rarr;
                        </motion.div>
                    </form>
                </motion.div>
            </motion.main>

            <div className="animBg">
                <div id="dots"></div>
            </div>

            <Footer />
        </div>
     );
}
 
export default Contact;