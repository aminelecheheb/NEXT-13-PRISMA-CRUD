import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { User } from "./user";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default function Home() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/api/auth/signin");
  // }
  return (
    <main className={styles.main}>
      <h1>Hello world</h1>
      <User />
    </main>
  );
}
