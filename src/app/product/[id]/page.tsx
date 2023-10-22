import { getSingleProduct } from "@/lib/product";
import styles from "@/app/styles/ProductPage.module.css";
import Image from "next/image";
import Comments from "./Comments";

const page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const product = await getSingleProduct(id);

  const comments = product.product?.comments || [];
  return (
    <main>
      <div className="container">
        {product.product && (
          <div className={styles.product_page}>
            <div className={styles.image_container}>
              <Image src={product.product.imageUrl} alt="product image" fill />
            </div>
            <div className={styles.infos}>
              <h1>{product.product.title}</h1>
              <p> {product.product.description} </p>
            </div>
            {product.product && <Comments comments={comments} productId={id} />}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
