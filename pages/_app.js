import '../styles/globals.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Buttons from '../components/Buttons'

function MyApp({ Component, pageProps }) {

  return (
    <>
      {true && (
        <div style={{ overflow: "hidden" }}>
          <NavBar style={{ position: 'relative', zIndex: '1000' }} />
          <Head>
            <link rel="shortcut icon" href="/images/favicon.png" />
          </Head>

          <Buttons style={{zIndex: '999999999999999999999999' }} />

          <div>
      <div style={{
        position: "relative", fontSize: "22px",

      }}>
        <div class="mobile-warning">
          <div class="speech-bubble" style={{
          }}>
            <img src="box1.gif" alt="notebook" style={{
              width:
                "100%", height:
                "100%"
            }} />
          <Component {...pageProps} />
          </div>
        </div>

      </div></div>
          <Footer />
        </div>
      )}

    </>
  );
}

export default MyApp;
