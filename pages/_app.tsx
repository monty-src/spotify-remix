import '../styles/globals.css';
import type { AppProps } from "next/app";

/**
 * A component that renders the given component with its page props.
 *
 * @param {AppProps} props - The properties for the component.
 * @param {React.ComponentType} props.Component - The component to render.
 * @param {object} props.pageProps - The page properties for the component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
