import { prisma } from "./prisma";

export async function createProduct(
  title: string,
  description: string,
  imageUrl: string,
  categoryId: number,
  authorId: number
) {
  try {
    const product = await prisma.product.create({
      data: { title, description, imageUrl, authorId, categoryId },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}
