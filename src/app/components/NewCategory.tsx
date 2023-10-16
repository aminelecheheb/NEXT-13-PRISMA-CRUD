"use client";
import { useRef } from "react";
import { createCategoryAction } from "../_actions";

const NewCategory = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const categoryInput = data.get("category");
    if (typeof categoryInput !== "string" || !categoryInput) return;

    await createCategoryAction(categoryInput);

    formRef.current?.reset();
  }
  return (
    <div className="newCategory">
      <h2>Create new category</h2>
      <form ref={formRef} action={action}>
        <input type="text" name="category" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default NewCategory;
