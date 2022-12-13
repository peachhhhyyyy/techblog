import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../src/components/Header';
import parkyeonghoo from '../public/parkyeonghoo.png'

export default function Homepage() {
    return (
      <div>
        <Head>
          <title>박영후 블로그 : About</title>
          <meta name="viewport" content="initial-scale=1.0. width=device-width" />
        </Head>

        <Navigation />

        <div className="about-container">
            <h1 className="about-title">About</h1>
            <h2 className="about-area">
              <figure>
                <Image 
                  alt="parkyeonghoo mimoticon"
                  src={parkyeonghoo}
                  width={400}
                  height={400}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
                <figcaption>
                  <p>기록하는 것을 좋아하는 개발자입니다.</p>
                  <p>주변사람들과 정보를 공유하고 문제를 함께 해결하는 것에 기쁨을 느낍니다.<br></br>혼자 일한 적이 많지만, 같이 일하는 것도 아주 좋아합니다.</p>
                  <p>블로그 운영하는 것을 좋아합니다.<br></br>짧은 지식을 담은 기술블로그, 일상을 담은 개인블로그를 운영하고 있습니다.</p>
                  <button type="button" className="button button-point">Resume</button>
                </figcaption>
              </figure>
            </h2>
        </div>
      </div>
    );
}