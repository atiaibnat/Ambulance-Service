import Head from "next/head";
import Navbar from "../Components/Shared/Navbar/Navbar";
import HomeIndex from "../Components/Home/HomeIndex";
import Footer from "../Components/Shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rescue Reach</title>
        <meta name="description" content="Generated by Ambulance Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeIndex />
      <Footer />
    </div>
  );
}
