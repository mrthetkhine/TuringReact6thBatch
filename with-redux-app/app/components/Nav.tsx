'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'

export const Nav = () => {
  const pathname = usePathname();
  console.log('Pathname  ',pathname);
  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
        href="/"
      >
        Home
      </Link>
        <Link
            className={`${styles.link} ${
                pathname === '/dashboard' ? styles.active : ''
            }`}
            href="/main/dashboard"
        >
            Dashboard
        </Link>
      <Link
        className={`${styles.link} ${
          pathname === '/verify' ? styles.active : ''
        }`}
        href="/verify"
      >
        Verify
      </Link>
    </nav>
  )
}
