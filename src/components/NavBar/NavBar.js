import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-links"]}>
        <li>
          <Link href="/">About Me</Link>
        </li>
        <li>
          <Link href="/files/marinawooden-resume.pdf">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
