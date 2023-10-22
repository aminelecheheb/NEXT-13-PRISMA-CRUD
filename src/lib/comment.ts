import { prisma } from "./prisma";

export async function createComment(
  productId: number,
  authorId: number,
  body: string
) {
  try {
    const comment = await prisma.comment.create({
      data: { productId, authorId, body },
    });
    return { comment };
  } catch (error) {
    return { error };
  }
}

export async function deleteAllCommentsByProductId(productId: number) {
  try {
    const comments = await prisma.comment.deleteMany({
      where: { productId },
    });
    return { comments };
  } catch (error) {
    return { error };
  }
}
