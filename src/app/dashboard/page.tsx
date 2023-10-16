import styles from "@/app/styles/Dashboard.module.css";
import NewProduct from "../components/NewProduct";
import NewCategory from "../components/NewCategory";
import Categories from "../components/Categories";
const page = () => {
  return (
    <div className={`container ${styles.dashboard}`}>
      <main>
        <div className={styles.first_flex}>
          <div className={styles.actions}>
            <NewCategory />
            <NewProduct />
          </div>
          <div className={styles.items}>
            <Categories />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
