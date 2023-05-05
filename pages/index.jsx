import Head from "next/head";
import { Bio, MountainHero, Layout, HiddenH1 } from "/components/";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Coding Canuck - Homepage</title>
        <meta property="og:title" content="The Coding Canuck - Homepage" />
        <meta
          name="description"
          content="Homepage and bio of the author, Alex Langevin"
        />
      </Head>
      <MountainHero>
        <Layout>
          <HiddenH1>The Coding Canuck (Alex Langevin) Homepage</HiddenH1>
          <Bio />
        </Layout>
      </MountainHero>
    </>
  );
}
