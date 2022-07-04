import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import styles from '../styles/Contact.module.css'
import { useTheme } from 'next-themes';

import useMounted from '../components/useMounted.js'
import Header from '../components/header'
import Footer from '../components/footer';


const Contact = () => {
  // const mounted = useMounted()

  const router = useRouter();

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
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

      const cardIconsParent = [
          { id: 1, title: "Address:", pholder: "Jyväskylä, Finland", icon: "ci:location"},
          { id: 2, title: "Phone:", pholder: '+358 469686908', icon: "bxs:phone"},
          { id: 3, title: "Email:", pholder: "bimu.freeman@outlook.com", icon: "ic:round-email"}
        ]

    return ( 
        <div className="px-5 transition duration-500 bg-gray-200 pt-36 dark:bg-neutral-800 lg:px-0 lg:pt-[6rem]">
            <Head>
                <title>Contact - Brima Freeman</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header variants={pageNotLoad} />

            <motion.main className={styles.main}
                initial="hidden"
                animate="visible"
            // className={styles.main}
            >
                <h1 className="m-0 leading-tight text-[4rem] text-center">
                    Contact
                </h1>

                <p className="mx-0 mt-4 mb-8 leading-normal text-center cursor-default text-[1.5rem] xl:text-[1.3rem] lg:w-[350px]">
                    Start by filling in the form, and I will get back to you as soon as possible.
                </p>

                <motion.div className={styles.grid} variants={gridVariants}>
                    <div className="flex flex-col justify-around px-12 py-4 text-left no-underline shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 2xl:px-4 2xl:items-center xl:p-12 lg:p-4">
                        <h1 className="text-[2.5rem] 2xl:w-[85%] lg:text-[1.25rem]">Let&apos;s get in touch</h1>
                        <p className="font-medium text-[1.125rem] 2xl:w-[85%] xl:text-[1.5rem] lg:text-[1rem]">I&apos;m looking forward to working on a new project with you.</p>

                        <div className="h-[65%] p-0 flex flex-col 2xl:w-[85%] lg:w-[90%]"
                          // className={styles.cardIconCont}
                        
                        >
                            {cardIconsParent.map((cards, i) => (
                                <div className={styles.cardIconsParent}
                                    key={cards.id}>
                                    <div className="w-[50px] h-[50px] rounded-full mr-8 bg-black flex justify-center items-center text-[1.5rem] dark:bg-white lg:w-[30px] lg:h-[30px] lg:text-[.75rem]"
                                      // className={styles.cardIcon}
                                    >
                                        <Icon className="text-white transition-all duration-150 ease-in-out dark:text-black"
                                          // className={styles.Icon}
                                        icon={cards.icon} />
                                    </div>
                                    
                                    <div className={styles.cardIconText}>
                                        <h3 className="opacity-50 lg:text-[1rem]">{cards.title}</h3>
                                        <p className="text-[1.5rem] font-light font-roboto 2xl:text-[1.25rem] xl:text-[1.5rem] lg:text-[1.125rem]">{cards.pholder}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form className="px-8 py-8 text-left no-underline shadow-md text-inherit bg-white/80 backdrop-blur-sm dark:bg-black/50 2xl:py-4 2xl:px-4 lg:p-0"
                      // className={styles.cardI}
                    action="/success
                    " id="form" name="contact" method="post()" // data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <div className={styles.formContent}>
                            <div className={styles.formNameContent}>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="name">full name</label>
                                    <input name="name" type="text" id="name" placeholder="Name" required className="dark:text-black"
                                    // style={errors.fullname ? { border: "solid 1.5px #ed4337" } : null} {...register("fullname", { required: true, minLength: 5 })}
                                    />
                                    {/* {errors.fullname?.type === "required" && <p>Please enter your full name.</p>}
                                    {errors.fullname?.type === "minLength" && <p>Your name must be at least 5 characters long.</p>} */}
                                </div>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="email">email address</label>
                                    <input name="email" type="email" id="email" placeholder="Email" required className="dark:text-black"
                                    // style={errors.email ? { border: "solid 1.5px #ed4337" } : null} {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "This is not a valid email address." } })}
                                    />
                                    {/* {errors.email?.type === "required" && <p>You must enter your email.</p>}
                                    {errors.email?.type === "pattern" && <p>Please include an &quot;@&quot; in the email.</p>} */}
                                </div>
                            </div>

                            <div className={styles.MessageContent}>
                                <div className={styles.formInputTheme}>
                                    <label htmlFor="subject">subject</label>
                                    <input name="subject" type="text" id="subject" placeholder="Subject" required className="dark:text-black"
                                    // style={errors.subject ? { border: "solid 1.5px #ed4337" } : null} {...register("subject", { required: true })}
                                    />
                                    {/* {errors.subject?.type === "required" && <p>Your message needs a subject.</p>} */}
                                </div>
                                <div className="flex flex-col h-[70%] w-full relative lg:w-[95%]"
                                >
                                    <label htmlFor="message" className="font-[600] uppercase text-[.75rem] mt-4 mb-2">message</label>
                                    <textarea name="message" id="message" rows="5" cols="1" required className="p-2 text-[1.25rem]  dark:text-black"
                                    // style={errors.message ? { border: "solid 1.5px #ed4337" } : null}  {...register("message", { required: true, minLength: 5, maxLength: 1000 })}
                                    >
                                    </textarea>
                                    {/* {errors.message?.type === "required" && <p>Please enter your message.</p>}
                                    {errors.message?.type === "minLength" && <p>Your message must be at least 100 characters.</p>}
                                    {errors.message?.type === "maxLength" && <p>Your message cannot exceed 1000 characters.</p>} */}
                                </div>
                            </div>
                        </div>

                        <motion.div className="cursor-pointer ml-8 w-[12rem] h-[3rem] text-[1.5rem] p-3 relative flex items-center justify-center bg-green-400 text-white rounded  dark:text-black dark:bg-gray-200 2xl:p-0 2xl:text-[1.3rem] 2xl:after:-bottom-2 xl:text-[1.2rem] xl:after:h-[1.5px] lg:text-[1rem] lg:h-[2rem] lg:w-[10rem]"
                          whileHover={{ x: 10, transition: { duration: .1 }}}
                          whileTap={{ scale: 0.9 }}
                        >
                            <input type="submit" value="send message" className="uppercase cursor-pointer"/>
                        </motion.div>

                    </form>
                </motion.div>
            </motion.main>

            <Footer />
        </div>
     );
}
 
export default Contact;