import { prisma } from "./prisma";

export async function createCategory(category: string) {
  try {
    const createdCategory = await prisma.category.create({
      data: { category },
    });
    return { createdCategory };
  } catch (error) {
    return { error };
  }
}
