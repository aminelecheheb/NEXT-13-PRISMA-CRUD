"use client";
import styles from "../styles/Dashboard.module.css";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";
import { deleteProduct } from "@/lib/product";
import { deleteProductAction } from "../_actions";

type ProductType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
  categoryId: number;
};

const Product = (props: { product: ProductType }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <div className={styles.icons}>
          <AiFillDelete
            className={styles.delete}
            onClick={() => deleteProductAction(props.product.id)}
          />
        </div>
        <Image
          fill
          src={props.product.imageUrl}
          alt={props.product.title}
          className={styles.img}
        />
      </div>
      <div className={styles.infos}>
        <h3>{props.product.title}</h3>
        <p>{props.product.description}</p>
      </div>
    </div>
  );
};

export default Product;
