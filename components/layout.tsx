import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const siteTitle = "samilab.co.uk";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="flex bg-white flex-col justify-center min-h-screen px-8">
      <Head>
        <title>Sami Lab</title>
        <meta name="description" content="Sami Lab for predictive medicine." />
        <meta name="description" content={siteTitle} />
        <meta name="og:title" content={siteTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex flex-col flex-1">
        <div className="flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
