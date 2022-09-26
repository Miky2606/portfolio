import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Layout from './Layouts/layot'


function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <Layout>
<Component {...pageProps} />

  </Layout>
  )
  
}

export default MyApp
