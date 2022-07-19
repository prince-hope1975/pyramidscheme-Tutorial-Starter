import '../styles/globals.css'
import { AppProvider, useGlobalContext } from '../context'
import { AnimatePresence } from 'framer-motion'
import { Head } from './index'
function MyApp({ Component, pageProps }) {
  const {message} = useGlobalContext()

  return (
    <AppProvider>
      
      <Head />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
    

        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp
