import { prisma } from "./prisma";

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany();
    return { categories };
  } catch (error) {
    return { error };
  }
}

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
