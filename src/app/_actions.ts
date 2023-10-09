"use server";
import { createUser } from "@/lib/auth";
// import { revalidatePath } from "next/cache";

import { signIn } from "next-auth/react";

export async function createUserAction(
  name: string,
  email: string,
  password: string
) {
  const data = await createUser(name, email, password);
  return data;
}
