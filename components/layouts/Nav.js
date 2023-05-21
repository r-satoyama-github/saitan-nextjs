import Link from "next/link";
import styles from "styles/nav.module.css";
import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: hixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/tomicars" onClick={closeNav}>
            Tomicars
          </Link>
        </li>
        <li>
          <Link href="/voices" onClick={closeNav}>
            Voices
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={closeNav}>
            About
          </Link>
        </li>
        {/* <li>
          <Link href="/manage" onClick={closeNav}>
            Manage
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

// const SLink = styled(Link)`
//   &:hover {
//     cursor: pointer;
//     color: var(--navy-hover);
//   }
// `;
