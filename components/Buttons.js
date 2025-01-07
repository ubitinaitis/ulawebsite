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
                        <Link href="/about" style={{fontSize: "12px" }}>/about</Link> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapblue" style={{fontSize: "12px" }}>
                        <Link href="/coding" style={{fontSize: "12px" }}>/code</Link> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapyellow" style={{fontSize: "12px" }}>
                        <Link href="/art" style={{fontSize: "12px" }}>/art</Link> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywraporange" style={{fontSize: "12px" }}>
                        <Link href="/art" style={{fontSize: "12px" }}>/photos</Link> ❤
                    </div>
                </div>

                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapgreen" style={{fontSize: "12px" }}>
                        <a target="_blank" href="https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing">
                            my resume!
                        </a> ❤
                    </div>
                </div>

        </div>)}

        {!isMobile && (
        <div className="buttonsss">            
            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrappink">
                        <Link href="/about">/about</Link> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapblue">
                        <Link href="/coding">/code</Link> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapyellow">
                        <Link href="/art">/art</Link> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywraporange">
                        <Link href="/photos">/photos</Link> ❤
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className={`littlebutton`} style={{ }}>
                    <div className="candywrapgreen">
                        <a target="_blank" href={"https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing"}>
                            my resume!
                        </a> ❤
                    </div>
                </div>
            </Draggable>

        </div>)}
        </>

    )

}

export default Buttons;
