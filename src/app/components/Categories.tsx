import { getCategories } from "@/lib/category";
import styles from "@/app/styles/Dashboard.module.css";

const Categories = async () => {
  const { categories } = await getCategories();

  return (
    <div>
      <h2>Categories</h2>
      <div className={styles.categories}>
        {categories?.map((category) => {
          return (
            <div className={styles.single_category} key={category.id}>
              {`${category.category} (${category.id})`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
