import '../styles/globals.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <NavBar style = {{position: 'relative', zIndex: '1000'}}/>
        <Head>
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <Component {...pageProps}/>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
