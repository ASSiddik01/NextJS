import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="./custom.js"></script> */}
      </Head>
      {/* <Script src="./custom.js" strategy="lazyOnload"></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <style jsx>
          {`
            .name {
              color: red;
            }
          `}
        </style>
        <h2 className="name yello_bg">Abu Shama</h2>
        <Link href="/about">About</Link>

        <p className={styles.description}>Get started by editing </p>
        <div className="blog">
          <div className="blogItem">
            <h1>Blog Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              debitis libero assumenda nemo perspiciatis laboriosam et
              doloremque sed aut illo.
            </p>
          </div>
          <div className="blogItem">
            <h1>Blog Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              debitis libero assumenda nemo perspiciatis laboriosam et
              doloremque sed aut illo.
            </p>
          </div>
          <div className={styles.blogItem}>
            <h1>Blog Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
              debitis libero assumenda nemo perspiciatis laboriosam et
              doloremque sed aut illo.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
