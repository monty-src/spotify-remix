/**
 * @module postcss.config
 *
 *
 * @author montier.elliott@gmail.com
 */
import type { NextPage } from "next";
import Head from "next/head";

import Sidebar from "../components/Sidebar";

/**
 * The Home component for the Spotify Remix app.
 *
 *
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Spotify Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
};

/** exporting */
export default Home;
