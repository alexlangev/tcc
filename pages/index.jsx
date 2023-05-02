import Head from "next/head";
import { MountainHero, Layout, HiddenH1 } from "/components/";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coding Canuck - Homepage</title>
        <meta property="og:title" content="The Coding Canuck - Homepage" />
      </Head>
      <MountainHero>
        <Layout>
          <HiddenH1 />
        </Layout>
      </MountainHero>
    </>
  );
}
