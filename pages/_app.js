import '../styles/globals.scss'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyApp({Component, pageProps}) {
  return (
  <>
  <div style = {{overflow: "hidden"}}>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </div>
  </>
  )
}

export default MyApp
