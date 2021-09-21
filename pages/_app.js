import { ToastContainer } from "react-toastify"
import Nav from "../components/Nav"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "antd/dist/antd.css"
import "../stylesPages/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <ToastContainer position="bottom-center" />
    </>
  )
}

export default MyApp
