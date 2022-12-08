import Head from 'next/head';
import Navigation from '../src/components/Header';

export default function Homepage() {
    return (
      <div>
        <Head>
          <title>Parkyeonghoo Blog</title>
          <meta name="viewport" content="initial-scale=1.0. width=device-width" />
        </Head>

        <Navigation />
  
        {/* 리스트 컴포넌트 넣을 예정 */}
      </div>
    );
}