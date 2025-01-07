import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React from 'react'


export default function Home() {

  return (

    // <div className = {styles.container} styles = {{overflowy: "hidden"}}>
    //         <Draggable>
    //             <div className="input-wrapper" style={{ position: "absolute", top: "450px", left: "300px"}}>
    //                 <span className="welcome"></span>
    //             </div>
    //         </Draggable>
    // </div>


    <div>

           
              <div className="input-wrapper" style={{ top: "25%", right: "20%"}}>
                <span className="welcome"></span>
              </div>

      </div>
  )

}

