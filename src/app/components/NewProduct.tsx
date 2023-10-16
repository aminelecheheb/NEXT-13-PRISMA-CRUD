"use client";
import { useRef } from "react";
import { createProductAction } from "../_actions";
const NewProduct = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const title = data.get("title");
    if (typeof title !== "string" || !title) return;

    const description = data.get("description");
    if (typeof description !== "string" || !description) return;

    const imageUrl = data.get("imageUrl");
    if (typeof imageUrl !== "string" || !imageUrl) return;

    const categoryId = data.get("categoryId");
    if (typeof categoryId !== "string" || !categoryId) return;

    await createProductAction(title, description, imageUrl, categoryId);

    formRef.current?.reset();
  }

  return (
    <div className="newProduct">
      <h2>create new Product</h2>
      <form ref={formRef} action={action}>
        <input name="title" type="text" placeholder="title" />
        <textarea name="description" id=""></textarea>
        <input name="imageUrl" type="text" placeholder="image" />
        <input name="categoryId" type="text" placeholder="categoryId" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
