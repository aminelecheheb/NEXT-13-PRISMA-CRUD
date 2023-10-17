import { getProducts } from "@/lib/product";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import styles from "@/app/styles/Dashboard.module.css";
import Product from "./Product";

const Products = async () => {
  const session = await getServerSession(authOptions);
  const authorId = parseInt(session?.user?.id);
  const { products } = await getProducts(authorId);

  return (
    <div className={styles.products_wrapper}>
      <h2>Products</h2>
      <div className={styles.products}>
        {products?.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
