"use client";

import styles from "./styles/page.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { setActiveNav } from "@/redux/features/globalSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveNav("home"));
  });
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <h1>home page</h1>
        </div>
      </main>
    </>
  );
}
