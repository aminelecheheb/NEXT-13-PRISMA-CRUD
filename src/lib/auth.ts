import { prisma } from "./prisma";
import { hash } from "bcrypt";
// import { signIn } from "next-auth/react";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  try {
    const hashPassword = await hash(password, 12);
    const user = await prisma.user.create({
      data: { name, email, password: hashPassword },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
