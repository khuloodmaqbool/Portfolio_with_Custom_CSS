"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
            style={{ width: "13%" }}
          />
        </Link>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <Link href="/" className={pathname === "/" ? styles.activeLink : ""}>
          Home
        </Link>
        <Link href="/about" className={pathname === "/about" ? styles.activeLink : ""}>
          About
        </Link>
        <Link href="/skills" className={pathname === "/skills" ? styles.activeLink : ""}>
          Skills
        </Link>
        <Link href="/projects" className={pathname === "/projects" ? styles.activeLink : ""}>
          My Projects
        </Link>
        <Link href="/contact" className={pathname === "/contact" ? styles.activeLink : ""}>
          Contact
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
