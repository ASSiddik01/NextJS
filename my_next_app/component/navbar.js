import Link from "next/link";
import React from "react";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={style.main_menu}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
