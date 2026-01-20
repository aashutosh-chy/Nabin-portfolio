// File: src/pages/_app.js
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;