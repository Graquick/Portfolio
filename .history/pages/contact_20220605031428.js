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
            
     );
}
 
export default Contact;

