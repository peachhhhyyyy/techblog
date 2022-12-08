import Head from 'next/head';
import Navigation from '../src/components/Header';

export default function Homepage() {
    return (
      <div>
        <Head>
          <title>박영후 블로그 : About</title>
          <meta name="viewport" content="initial-scale=1.0. width=device-width" />
        </Head>

        <Navigation />

        <div className="about-container">
          <div className="profile">
            <h1>박영후</h1>
            <h2>
              <p>Github</p>
              <a>https://github.com/peachhhhyyyy</a>
            </h2>
            <h2>
              <p>Blog</p>
              <a>TO-DO</a>
            </h2>
            <h2>
              <p>Email</p>
              <a href="mailto:pyhoo78@naver.com">pyhoo78@naver.com</a>
            </h2>
          </div>
          <div className="introduce">
            <p>어느 조직이든 적응하려고 눈치 애지게 보고 애씀</p>
            <p>휴먼에러 최소화</p>
            <p>리더 역할은 다소 부족하나 서포터 역할 잘함</p>
          </div>
          <div className="project">
            <div className="project-area">
              VICS 사내 솔루션 제작
            </div>
            <div className="project-area">
              디앤오씨엠 엑셀 매크로 일부 제작
            </div>
            <div className="project-area">
              ETRI 일부분 참여
            </div>
          </div>
        </div>
      </div>
    );
}