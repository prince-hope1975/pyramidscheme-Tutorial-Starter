import '../styles/globals.css'
import { AppProvider } from '../context'
import { AnimatePresence } from 'framer-motion'
import { Head } from './index'
function MyApp({ Component, pageProps }) {

  return <AppProvider>'
    < Head/>
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
      <Component  {...pageProps} />
    </AnimatePresence>
  </AppProvider>
}

export default MyApp
