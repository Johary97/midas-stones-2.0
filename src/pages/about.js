import styles from "@styles/About.module.css";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Midas Stones</title>
        <meta name="description" content="About Midas Stones"></meta>
      </Head>
      <div>
        <h1 className={`${styles.about}`}>About</h1>
      </div>
    </>
  );
}
