import type { NextPage } from "next";
import Head from "next/head";

/**
 * The Home component for the Spotify Remix app.
 *
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Spotify Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About Page</h1>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
