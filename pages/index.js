import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React from 'react'


export default function Home() {
  
  return (
    
    <div className = {styles.container} styles = {{overflowy: "hidden"}}>
            <Draggable>
                <div class="input-wrapper" style={{ position: "absolute", alignItems: 'center', justifyContent: 'center'}}>
                    <span class="welcome"></span>
                </div>
            </Draggable>
    </div>
  )

}

