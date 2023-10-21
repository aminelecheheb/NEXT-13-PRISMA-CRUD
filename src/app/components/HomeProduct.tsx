import React from "react";
import styles from "@/app/styles/page.module.css";
import Image from "next/image";

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

const HomeProduct = (props: { product: ProductType }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
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

export default HomeProduct;
