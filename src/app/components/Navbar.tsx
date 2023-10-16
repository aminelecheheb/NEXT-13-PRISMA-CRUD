"use client";
import { useSession } from "next-auth/react";
import { LogoutButton, LoginButton } from "../auth";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import styles from "@/app/styles/Navbar.module.css";
const Navbar = () => {
  const { activeNav } = useAppSelector((state) => state.globalReducer);
  const { data: session } = useSession();
  return (
    <nav className={styles.nav_container}>
      <div className={`container ${styles.navbar}`}>
        <div>logo</div>
        <div className={styles.nav_center}>
          <Link
            className={`${styles.nav_link} ${
              activeNav === "home" && styles.active
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.nav_link} ${
              activeNav === "dashboard" && styles.active
            }`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div>{session ? <LogoutButton /> : <LoginButton />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
