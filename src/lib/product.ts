import { prisma } from "./prisma";

// get all products
export async function getAllProducts() {
  try {
    const products = await prisma.product.findMany({});
    return { products };
  } catch (error) {
    return { error };
  }
}

// get all products for a spesefic user
export async function getProducts(id: number) {
  try {
    const products = await prisma.product.findMany({ where: { authorId: id } });
    return { products };
  } catch (error) {
    return { error };
  }
}
// create product
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

// delete product
export async function deleteProduct(id: number) {
  try {
    const product = await prisma.product.delete({
      where: { id },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}

// get single product by id
export async function getSingleProduct(id: number) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: { comments: true },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}

// update product
export async function updateProduct(
  id: number,
  title: string | undefined,
  description: string | undefined,
  imageUrl: string | undefined,
  categoryId: number | undefined
) {
  try {
    const product = await prisma.product.update({
      where: { id: id },
      data: {
        title,
        description,
        imageUrl,
        categoryId,
      },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}
