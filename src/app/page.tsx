import { getAllProducts } from "@/lib/product";
import styles from "./styles/page.module.css";
import HomeProduct from "./components/HomeProduct";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.products}>
            {products.products &&
              products.products.map((product) => {
                return <HomeProduct product={product} />;
              })}
          </div>
        </div>
      </main>
    </>
  );
}
