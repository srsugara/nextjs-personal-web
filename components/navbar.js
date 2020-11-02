import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';

function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Contact', href: '/contact' },
  ];
  return (
    <>
      <Head>
        <title>{navs.find((nav) => nav.href === router.pathname).text}</title>
      </Head>
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <a className="logo">seru! ndeng</a>
          </Link>
          <ul className="nav-links">
            {navs.map((item) => (
              <li>
                <Link href={item.href}>
                  <a
                    className={`nav-item ${
                      router.pathname === item.href ? `active` : ``
                    }`}
                  >
                    {item.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Navbar);
