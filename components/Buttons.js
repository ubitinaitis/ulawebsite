import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React, { useEffect, useState } from 'react';

function Buttons() {

    const [isMobile, setIsMobile] = useState(false);

    // Check if the user is on a mobile device
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= window.innerHeight) {  // You can adjust this threshold based on your needs
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
  
      // Initial check
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup on unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
        {isMobile && (
        <div className="buttonsss">            
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrappink" style={{fontSize: "12px" }} >
                        <a href="/about" style={{fontSize: "12px" }}>/about</a> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapblue" style={{fontSize: "12px" }}>
                        <a href="/coding" style={{fontSize: "12px" }}>/code</a> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapyellow" style={{fontSize: "12px" }}>
                        <a href="/art" style={{fontSize: "12px" }}>/art</a> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywraporange" style={{fontSize: "12px" }}>
                        <a href="/art" style={{fontSize: "12px" }}>/photos</a> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapgreen" style={{fontSize: "12px" }}>
                        <Link href={"https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing"}>
                            <a target="_blank" style={{fontSize: "12px" }}>
                                my resume!</a>
                        </Link> ❤
                    </div>
                </div>

        </div>)}

        {!isMobile && (
        <div className="buttonsss">            
            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrappink">
                        <a href="/about">/about</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapblue">
                        <a href="/coding">/code</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapyellow">
                        <a href="/art">/art</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywraporange">
                        <a href="/photos">/photos</a> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapgreen">
                        <Link href={"https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing"}>
                            <a target="_blank">
                                my resume!</a>
                        </Link> ❤
                    </div>
                </div>
            </Draggable>

        </div>)}
        </>

    )

}

export default Buttons;
