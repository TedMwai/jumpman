import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
