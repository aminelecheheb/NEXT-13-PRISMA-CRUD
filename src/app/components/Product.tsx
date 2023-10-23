"use client";
import styles from "../styles/Dashboard.module.css";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { deleteProductAction } from "../_actions";
import { useRouter } from "next/navigation";

type ProductType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
  categoryId: number | null;
};

const handleDelete = async (id: number) => {
  const data = await deleteProductAction(id);
  console.log(data);
};

const Product = (props: { product: ProductType; id: number }) => {
  const router = useRouter();
  return (
    <div className={styles.product}>
      <div className={styles.image_container}>
        <div className={styles.icons}>
          <MdOutlineDeleteOutline
            className={styles.delete}
            onClick={() => handleDelete(props.id)}
          />

          <AiOutlineEdit
            className={styles.edit}
            onClick={() => router.push(`/dashboard/edit/${props.product.id}`)}
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
