import '../styles/style.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Script } from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

    </>
  )
}
