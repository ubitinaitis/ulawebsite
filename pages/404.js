import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React from 'react'

export default function Custom404() {
    return (
        <div> 

        <span className="bubble-text" style={{ overflowY: "auto", float: "left", overflowX: "hidden"}}>
            <div style={{
                position: "relative",  width: "100%", fontSize: "22px",
            }}>
are you lost? this page doesn't exist! @_@</div></span></div>
    )
}