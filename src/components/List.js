import Link from 'next/link';

export default function List() {
  return (
    <div>
      <div className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            박영후의 Blog
            {/* 로고 넣기 */}
          </a>
        </div>
      </div>
    </div>
  );
}