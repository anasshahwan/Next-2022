import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Nav";
import { Nav } from "react-bootstrap";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App Under Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin=""
      ></Script>

      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin=""
      ></Script>

      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin=""
      ></Script>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js App!</a>
        </h1>
      </main>

      <footer className={styles.footer}>Powered by Anas Shahwan</footer>
    </div>
  );
};

export default Home;
