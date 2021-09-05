import React from "react"
import Link from "next/link"
import styles from "./styles.module.scss"
console.log(styles)
const Nav = () => {
  return (
    <nav className={`${styles.navbar} nav bg-info d-flex`}>
      <Link href="/" passHref>
        <h4 className={styles.logo}>Social-Socket</h4>
      </Link>
      <Link href="/">
        <a aria-current="page" className="nav-link  text-light">
          Home
        </a>
      </Link>
      <Link href="/login">
        <a aria-current="page" className="nav-link text-light">
          Login
        </a>
      </Link>
      <Link href="/register">
        <a aria-current="page" className="nav-link text-light">
          Register
        </a>
      </Link>
    </nav>
  )
}

export default Nav
