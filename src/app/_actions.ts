"use server";
import { createUser } from "@/lib/auth";
// import { revalidatePath } from "next/cache";

export async function createUserAction(
  name: string,
  email: string,
  password: string
) {
  await createUser(name, email, password);
}
