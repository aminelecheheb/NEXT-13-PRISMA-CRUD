"use client";
import { useRef } from "react";
import { createCategoryAction } from "../_actions";

const NewCategory = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const categoryInput = data.get("category");
    if (typeof categoryInput !== "string" || !categoryInput) return;

    const d = await createCategoryAction(categoryInput);

    console.log(d);
    formRef.current?.reset();
  }
  return (
    <form ref={formRef} action={action}>
      <input type="text" name="category" />
      <button>submit</button>
    </form>
  );
};

export default NewCategory;
