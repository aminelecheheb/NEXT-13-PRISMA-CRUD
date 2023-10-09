"use client";

import { createUserAction } from "@/app/_actions";
import { User } from "@/app/user";
import { useRef } from "react";
import { signIn } from "next-auth/react";

const signup = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const name = data.get("name");
    if (typeof name !== "string" || !name) return;

    const email = data.get("email");
    if (typeof email !== "string" || !email) return;

    const password = data.get("password");
    if (typeof password !== "string" || !password) return;

    const d = await createUserAction(name, email, password);
    if (d.user) {
      await signIn("credentials", { email, password, callbackUrl: "/" });
      formRef.current?.reset();
    }
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
      <User />
    </main>
  );
};

export default signup;
