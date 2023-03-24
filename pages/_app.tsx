/**
 * @module pages/_app
 *
 *
 * @author montier.elliott@gmail.com
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * A component that renders the given component with its page props.
 *
 *
 * @param {AppProps} props - The properties for the component.
 * @returns {JSX.Element} - The rendered component.
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

/** exporting */
export default MyApp;
