import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import "../public/assets/scss/style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence wait>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className="base-page-size"
        >
          <Navbar />
          <SocialLinks />
          <Footer />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
