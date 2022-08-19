import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SessionProvider as AuthProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider session={session}>
      <Provider store={store}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
