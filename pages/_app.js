import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import "../public/assets/scss/style.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <SocialLinks />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}
