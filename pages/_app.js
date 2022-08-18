import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
