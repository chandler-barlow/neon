import "../styles/globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { GlobalContextProvider } from "../context/GlobalContext";
function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Sidebar />
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
