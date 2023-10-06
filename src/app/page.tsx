"use client";

import styles from "./page.module.css";
import Model from "./components/model";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
    </main>
  );
}
