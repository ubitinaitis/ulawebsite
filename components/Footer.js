import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React from 'react'

function Footer() {
    return (
        <footer className={styles.footer}>
        <footer className={styles.footerFunky}>by  <a href="https://github.com/ubitinaitis" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>ula bitinaitis</a>  ₍ᐢ. .ᐢ₎ using Next.js</footer>
    </footer>
    )
}

export default Footer