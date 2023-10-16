"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setActiveNav } from "@/redux/features/globalSlice";
import Sidebar from "../components/Sidebar";
import styles from "@/app/styles/Dashboard.module.css";
import NewProduct from "../components/NewProduct";
import NewCategory from "../components/NewCategory";
const page = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveNav("dashboard"));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <div className="container">
          <h1>Dashboard</h1>
          <NewProduct />
          <NewCategory />
        </div>
      </main>
    </div>
  );
};

export default page;
