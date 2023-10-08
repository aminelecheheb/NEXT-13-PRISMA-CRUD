"use client";

import { createUserAction } from "@/app/_actions";
import { useRef } from "react";

const signup = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const name = data.get("name");
    if (typeof name !== "string" || !name) return;

    const email = data.get("email");
    if (typeof email !== "string" || !email) return;

    const password = data.get("password");
    if (typeof password !== "string" || !password) return;

    await createUserAction(name, email, password);
    formRef.current?.reset();
  }

  return (
    <main>
      <form ref={formRef} action={action}>
        <input name="name" type="text" placeholder="enter your name" />
        <input name="email" type="text" placeholder="enter your email" />
        <input
          name="password"
          type="password"
          placeholder="enter your password"
        />
        <button>sign up</button>
      </form>
    </main>
  );
};

export default signup;
