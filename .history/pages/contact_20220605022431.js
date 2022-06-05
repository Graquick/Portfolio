import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

import Header from '../components/header'

const Contact = () => {

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
          { id: 1, title: "Address:", pholder: "198 West 21th Street, Suite 721 New York NY 10016", icon: "ci:location"},
          { id: 2, title: "Phone:", pholder: "+ 1235 2355 98", icon: "bxs:phone"},
          { id: 3, title: "Email:", pholder: "info@yoursite.com", icon: "ic:round-email"}
        ]

    return ( 
        <div className="px-5 py-0 ">
            <Head>
                <title>NEW! Home - Brima Freeman</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <motion.main className="min-h-screen flex flex-col justify-center flex-1 px-0 py-16 align-center"
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
            // className={styles.main}
            >
                <h1>
                    Contact
                </h1>

                <p>
                    Start by filling in the form, and I will get back to you as soon as possible.
                </p>

                <div>
                    <div>
                        <h1>Let&apos;s get in touch</h1>
                        <p>I&apos;m looking forward to working on a new project with you.</p>

                        <div>
                            {cardIconsParent.map((cards, i) => (
                                <div
                                    key={cards.id}>
                                    <div>
                                        <Icon icon={cards.icon} />
                                    </div>
                                    
                                    <div>
                                        <h3>{cards.title}</h3>
                                        <p>{cards.pholder}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form action="/success" id="form" name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>Get in touch</h1>

                        <div>
                            <div>
                                <div>
                                    <label htmlFor="fullname">full name</label>
                                    <input name="fullname" style={errors.fullname ? { border: "solid 1.5px #ed4337" } : null} type="text" id="fullname" placeholder="Name" {...register("fullname", { required: true, minLength: 5 })} required/> 
                                    {/* {errors.fullname?.type === "required" && <p>Please enter your full name.</p>}
                                    {errors.fullname?.type === "minLength" && <p>Your name must be at least 5 characters long.</p>} */}
                                    
                                </div>
                                <div>
                                    <label htmlFor="email">email address</label>
                                    <input name="email"
                                    style={errors.email ? { border: "solid 1.5px #ed4337" } : null} id="email" placeholder="Email" {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "This is not a valid email address." } })} required/>
                                    {/* {errors.email?.type === "required" && <p>You must enter your email.</p>}
                                    {errors.email?.type === "pattern" && <p>Please include an &quot;@&quot; in the email.</p>} */}
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="subject">subject</label>
                                    <input name="subject" style={errors.subject ? { border: "solid 1.5px #ed4337" } : null} type="text" id="subject" placeholder="Subject" {...register("subject", { required: true })} required/>
                                    {/* {errors.subject?.type === "required" && <p>Your message needs a subject.</p>} */}
                                </div>
                                <div
                                >
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" style={errors.message ? { border: "solid 1.5px #ed4337" } : null} id="message" rows="5" cols="1" {...register("message", { required: true, minLength: 5, maxLength: 1000 })} required>
                                    </textarea>
                                    {/* {errors.message?.type === "required" && <p>Please enter your message.</p>}
                                    {errors.message?.type === "minLength" && <p>Your message must be at least 100 characters.</p>}
                                    {errors.message?.type === "maxLength" && <p>Your message cannot exceed 1000 characters.</p>} */}
                                </div>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ x: 10, transition: { duration: .1 }}}
                            whileTap={{ scale: 0.9 }}
                        >
                            <input type="submit" value="Send Message" /> &rarr;
                        </motion.div>
                    </form>
                </div>
            </motion.main>

            <footer className="flex justify-center flex-1 px-0 py-8 border-t border-gray-200 align-center"
            // className={styles.footer}
            >
                <Link className="flex justify-center flex-grow align-center"
                href="/"
                target="_blank" rel="noopener noreferrer"
                >
                    <a>
                    Copyright{' '}
                    <span className="h-4 ml-2"
                    // className={styles.logo}
                    >
                    &copy; Brima Freeman 2022 {' '}
                    </span>
                    All rights reserved
                    </a>
                </Link>
            </footer>
        </div>
     );
}
 
export default Contact;