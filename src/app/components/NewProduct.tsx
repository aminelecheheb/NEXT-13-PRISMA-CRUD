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

    const d = await createProductAction(
      title,
      description,
      imageUrl,
      categoryId
    );

    console.log(d);
    formRef.current?.reset();
  }

  return (
    <form ref={formRef} action={action}>
      <input name="title" type="text" placeholder="title" />
      <textarea name="description" id=""></textarea>
      <input name="imageUrl" type="text" placeholder="image" />
      <input name="categoryId" type="text" placeholder="categoryId" />
      <button>submit</button>
    </form>
  );
};

export default NewProduct;
