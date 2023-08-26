'use client'

/* Core */
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/* Instruments */
import styles from '../styles/layout.module.css'
import {selectAuth, useSelector} from "@/lib/redux";

export const Nav = () => {
  const pathname = usePathname()
    const auth = useSelector(selectAuth);
    let login = auth.token;
  return (
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link
                    className={'nav-link'}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                {
                    !login &&  <li className="nav-item active">
                        <Link
                            className={'nav-link'}
                            href="/login"
                        >
                            Login
                        </Link>
                    </li>
                }

                <li className="nav-item active">
                    <Link
                        className={'nav-link'}
                        href="/movie"
                    >
                        Movies
                    </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className={'nav-link'}
                    href="/verify"
                  >
                    Verify
                  </Link>
                </li>
                {
                    login &&  <li className="nav-item active">
                        <Link
                            className={'nav-link'}
                            href="/logout"
                        >
                            Logout
                        </Link>
                    </li>
                }

            </ul>
        </div>
    </nav>
  )
}
