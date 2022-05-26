import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function () {
  return (
    <Layout>
      <Head>
        <title>My First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => {
            console.log(`script loaded correctly`);
          }}
        />
      </Head>
      <h1>My First Postt</h1>
      <h2>
        <Link href="/">
          <a>back to top</a>
        </Link>
      </h2>
      <div>
        profile picture
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="my name"
        />
      </div>
    </Layout>
  );
}
