import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            박영후의 Blog
            {/* 로고 넣기 */}
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/posts">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
