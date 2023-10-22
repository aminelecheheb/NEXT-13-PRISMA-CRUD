"use client";
import { useSession } from "next-auth/react";
import { LogoutButton, LoginButton } from "../auth";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import styles from "@/app/styles/Navbar.module.css";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { setActiveNav } from "@/redux/features/globalSlice";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { activeNav } = useAppSelector((state) => state.globalReducer);
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveNav(pathname));
  }, [pathname]);
  return (
    <nav className={styles.nav_container}>
      <div className={`container ${styles.navbar}`}>
        <div>logo</div>
        <div className={styles.nav_center}>
          <Link
            className={`${styles.nav_link} ${
              activeNav === "/" && styles.active
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.nav_link} ${
              activeNav === "/dashboard" && styles.active
            }`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div>
          {session ? (
            <LogoutButton />
          ) : (
            <div>
              <LoginButton />
              <button onClick={() => router.push("auth/signup")}>
                sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
