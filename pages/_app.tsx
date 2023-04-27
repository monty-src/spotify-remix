/**
 * @module pages/_app
 *
 *
 * @author montier.elliott@gmail.com
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * App component
 *
 *
 * @param {AppProps}
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

/** exporting */
export default MyApp;
