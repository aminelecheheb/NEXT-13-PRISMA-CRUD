"use client";
import { updateProductAction } from "@/app/_actions";
import { useState } from "react";

type Product = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
  categoryId: number | null;
} | null;

const EditForm = ({ product, id }: { product: Product; id: number }) => {
  const [title, setTitle] = useState(product?.title);
  const [description, setDescription] = useState(product?.description);
  const [imageUrl, setImageUrl] = useState(product?.imageUrl);
  const [categoryId, setCategoryId] = useState(product?.categoryId);

  const handleUpdate = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    title: string | undefined,
    description: string | undefined,
    imageUrl: string | undefined,
    categoryId: number | undefined
  ) => {
    e.preventDefault();
    updateProductAction(id, title, description, imageUrl, categoryId);
  };

  return (
    <form>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        name="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <input
        name="imageUrl"
        type="text"
        placeholder="image"
        onChange={(e) => setImageUrl(e.target.value)}
        value={imageUrl}
      />
      <input
        name="categoryId"
        type="text"
        placeholder="categoryId"
        onChange={(e) =>
          e.target.value === ""
            ? setCategoryId(0)
            : setCategoryId(parseInt(e.target.value))
        }
        value={categoryId || 1}
      />
      <button
        onClick={(e) => {
          handleUpdate(e, id, title, description, imageUrl, categoryId || 1);
        }}
      >
        submit
      </button>
    </form>
  );
};

export default EditForm;
