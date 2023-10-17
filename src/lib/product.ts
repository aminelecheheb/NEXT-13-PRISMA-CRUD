import { prisma } from "./prisma";

export async function getProducts(id: number) {
  try {
    const products = await prisma.product.findMany({ where: { authorId: id } });
    return { products };
  } catch (error) {
    return { error };
  }
}

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

export async function deleteProduct(id: number) {
  try {
    const product = await prisma.product.delete({
      where: { id: id },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}
