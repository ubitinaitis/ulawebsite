import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React from 'react'

export default function Custom404() {
    return (
        <div style={{ position: "absolute", top: "450px", left: "300px"}}> 
        are you lost? this page doesn't exist!
        </div>
    )
}