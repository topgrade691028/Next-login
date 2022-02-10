import Head from 'next/head';
import Image from 'next/image';

import { Layout } from '../components/layout/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space."/>
      </Head>
      <Layout>
        <section className="w-full h-screen relative overflow-hidden -mt-80">
          <div><Image src="/assets/images/land_background.png" objectFit="cover" layout="fill" alt="background" /></div>
          <div className="absolute bg-light-20 w-345 rounded-3xl px-15 py-30 mt-230 ml-500 text-center">
            <p className="text-white text-24 font-medium mb-15 leading-6">Collabration Through Conversation</p>
            <div className="flex justify-center pt-30">
              <a className="btn btn-secondary btn-xl w-full" href="/signup">Sign Up</a>
            </div>
            <div className="flex justify-center pt-30">
              <a className="btn btn-secondary btn-xl w-full" href="/signin">Log In</a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
