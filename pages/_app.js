import '../styles/globals.css'
import Sidebar from '../Components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
