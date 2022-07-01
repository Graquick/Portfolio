import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../styles/Home.module.css';
import stylesCarousel from '../styles/Carousel.module.css';
import stylesHeader from '../styles/Header.module.css'

import { useTheme } from 'next-themes';

function SideBar() {
  return (
    <div>SideBar</div>
  )
}

export default SideBar