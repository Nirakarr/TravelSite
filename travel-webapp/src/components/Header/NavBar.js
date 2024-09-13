// components/NavBar.js
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.jpg" 
            alt="Travel Logo"
            width={70} 
            height={70} 
          />
        </Link>
      </div>
      <div className="nav-links">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;