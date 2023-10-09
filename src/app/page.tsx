import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { User } from "./user";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>Hello world</h1>
      </main>
    </>
  );
}
