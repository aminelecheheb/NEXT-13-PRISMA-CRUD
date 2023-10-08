import { prisma } from "./prisma";
import { hash } from "bcrypt";

export async function createUser(
  name: string,
  email: string,
  password: string
) {
  const hashPasseword: any = await hash(password, 12);
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
