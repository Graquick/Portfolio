import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import styles from '../styles/Contact.module.css'

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
          { id: 1, title: "Address:", pholder: "198 West 21th Street, Suite 721", icon: "ci:location"},
          { id: 2, title: "Phone:", pholder: "+ 1235 2355 98", icon: "bxs:phone"},
          { id: 3, title: "Email:", pholder: "info@yoursite.com", icon: "ic:round-email"}
        ]

    return ( 
        <div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="company-website" class="block text-sm font-medium text-gray-700"> Website </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"> http:// </span>
                  <input type="text" name="company-website" id="company-website" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com">
                </div>
              </div>
            </div>

            <div>
              <label for="about" class="block text-sm font-medium text-gray-700"> About </label>
              <div class="mt-1">
                <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"> Photo </label>
              <div class="mt-1 flex items-center">
                <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only">
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<div class="hidden sm:block" aria-hidden="true">
  <div class="py-5">
    <div class="border-t border-gray-200"></div>
  </div>
</div>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <fieldset>
              <legend class="sr-only">By Email</legend>
              <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="comments" class="font-medium text-gray-700">Comments</label>
                    <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="offers" class="font-medium text-gray-700">Offers</label>
                    <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
              <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input id="push-everything" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700"> Everything </label>
                </div>
                <div class="flex items-center">
                  <input id="push-email" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700"> Same as email </label>
                </div>
                <div class="flex items-center">
                  <input id="push-nothing" name="push-notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700"> No push notifications </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
        // <div className="px-5 py-0 ">
        //     <Head>
        //         <title>NEW! Home - Brima Freeman</title>
        //         <meta name="description" content="Generated by create next app" />
        //         <link rel="icon" href="/favicon.ico" />
        //     </Head>

        //     <Header />

        //     <motion.main className="min-h-screen max-w-7xl bg-orange-300 m-auto flex flex-col align-center justify-center flex-1 px-0 py-16 align-center"
        //         variants={container}
        //         initial="hidden"
        //         animate="visible"
        //         exit="exit"
        //     // className={styles.main}
        //     >
        //         <h1 className="m-0 leading-tight text-6xl font-medium text-center">
        //             Contact
        //         </h1>

        //         <p className="mt-8 mx-0 mb-12 leading-normal cursor-default text-center text-xl">
        //             Start by filling in the form, and I will get back to you as soon as possible.
        //         </p>

        //         <div className="flex justify-center align-center w-4xl h-full bg-slate-600">
        //             <div className="m-4 py-4 px-6 text-left no-underline shadow-md rounded-xl bg-orange-50 w-2/5 h-full flex flex-col">
        //                 <h1 className="m-0 leading-tight text-3xl font-medium">Let&apos;s get in touch</h1>
        //                 <p className="text-sm my-4 font-medium">I&apos;m looking forward to working on a new project with you.</p>

        //                 <div>
        //                     {cardIconsParent.map((cards, i) => (
        //                         <div className="flex align-center bg-red-400"
        //                             key={cards.id}>
        //                             <div className="w-12 h-12 rounded-full text-2xl shadow-md bg-black text-white ml-4 flex align-center justify-center">
        //                                 <Icon className="h-full" icon={cards.icon} />
        //                             </div>
                                    
        //                             <div className="w-3/5 ml-8 mb-4">
        //                                 <h3 className="font-bold">{cards.title}</h3>
        //                                 <p>{cards.pholder}</p>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>

        //             <form className="m-4 pt-4 px-12 pb-8 no-underline shadow-md rounded-xl w-3/5"
        //             action="/success" id="form" name="contact" method="POST" data-netlify="true">
        //                 <input type="hidden" name="form-name" value="contact" />
        //                 <h1>Get in touch</h1>

        //                 <div>
        //                     <div>
        //                         <div>
        //                             <label htmlFor="fullname">full name</label>
        //                             <input name="fullname" type="text" id="fullname" placeholder="Name" required
        //                             // style={errors.fullname ? { border: "solid 1.5px #ed4337" } : null} {...register("fullname", { required: true, minLength: 5 })}
        //                             /> 
        //                             {/* {errors.fullname?.type === "required" && <p>Please enter your full name.</p>}
        //                             {errors.fullname?.type === "minLength" && <p>Your name must be at least 5 characters long.</p>} */}
                                    
        //                         </div>
        //                         <div>
        //                             <label htmlFor="email">email address</label>
        //                             <input name="email" type="email" id="email" placeholder="Email" required
        //                             // style={errors.email ? { border: "solid 1.5px #ed4337" } : null} {...register("email", { required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "This is not a valid email address." } })}
        //                             />
        //                             {/* {errors.email?.type === "required" && <p>You must enter your email.</p>}
        //                             {errors.email?.type === "pattern" && <p>Please include an &quot;@&quot; in the email.</p>} */}
        //                         </div>
        //                     </div>

        //                     <div>
        //                         <div>
        //                             <label htmlFor="subject">subject</label>
        //                             <input name="subject" type="text" id="subject" placeholder="Subject" required
        //                             // style={errors.subject ? { border: "solid 1.5px #ed4337" } : null} {...register("subject", { required: true })}
        //                             />
        //                             {/* {errors.subject?.type === "required" && <p>Your message needs a subject.</p>} */}
        //                         </div>
        //                         <div
        //                         >
        //                             <label htmlFor="message">message</label>
        //                             <textarea name="message" id="message" rows="5" cols="1" required
        //                             // style={errors.message ? { border: "solid 1.5px #ed4337" } : null}  {...register("message", { required: true, minLength: 5, maxLength: 1000 })}
        //                             >
        //                             </textarea>
        //                             {/* {errors.message?.type === "required" && <p>Please enter your message.</p>}
        //                             {errors.message?.type === "minLength" && <p>Your message must be at least 100 characters.</p>}
        //                             {errors.message?.type === "maxLength" && <p>Your message cannot exceed 1000 characters.</p>} */}
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <motion.div
        //                     whileHover={{ x: 10, transition: { duration: .1 }}}
        //                     whileTap={{ scale: 0.9 }}
        //                 >
        //                     <input type="submit" value="Send Message" /> &rarr;
        //                 </motion.div>
        //             </form>
        //         </div>
        //     </motion.main>

        //     <footer className="flex justify-center flex-1 px-0 py-8 border-t border-gray-200 align-center"
        //     // className={styles.footer}
        //     >
        //         <Link className="flex justify-center flex-grow align-center"
        //         href="/"
        //         target="_blank" rel="noopener noreferrer"
        //         >
        //             <a>
        //             Copyright{' '}
        //             <span className="h-4 ml-2"
        //             // className={styles.logo}
        //             >
        //             &copy; Brima Freeman 2022 {' '}
        //             </span>
        //             All rights reserved
        //             </a>
        //         </Link>
        //     </footer>
        // </div>
     );
}
 
export default Contact;