import Head from 'next/head';
import { Footer } from './footer';
import { Navbar } from './navbar';

export function Layout(props: any) {
  return (<>
    <Head>
      <title>Perspective</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <section className="main-content-wrapper z-0">{props.children}</section>
    {/* <Footer /> */}
  </>);
}
