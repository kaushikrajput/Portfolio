import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import "../public/assets/scss/style.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <SocialLinks />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
