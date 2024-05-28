import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="/assests/js/jquery-1.12.4.min.js"></script>
        <script src="/assests/bootstrap/js/bootstrap.min.js"></script>
        <script src="/assests/owlcarousel/js/owl.carousel.min.js"></script>
        <script src="/assests/js/magnific-popup.min.js"></script>
        <script src="/assests/js/waypoints.min.js"></script>
        <script src="/assests/js/parallax.js"></script>
        <script src="/assests/js/jquery.countdown.min.js"></script>
        <script src="/assests/js/particles.min.js"></script>
        <script src="/assests/js/jquery.dd.min.js"></script>
        <script src="/assests/js/jquery.counterup.min.js"></script>
        <script src="/assests/js/spop.min.js"></script>
        <script src="/assests/js/notification.js"></script>
        <script src="/assests/js/scripts.js"></script>
        <script src="/index.js"></script>
      </Head>

        <Component {...pageProps} />

    </>
  );
}
