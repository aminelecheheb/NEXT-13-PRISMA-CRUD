"use server";
import { createUser } from "@/lib/auth";
import {
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} from "@/lib/product";
import { createComment, deleteAllCommentsByProductId } from "@/lib/comment";
import { createCategory } from "@/lib/category";
import { getServerSession } from "next-auth";

import { revalidatePath } from "next/cache";

import { signIn } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]/route";

export async function createUserAction(
  name: string,
  email: string,
  password: string
) {
  const data = await createUser(name, email, password);
  return data;
}

export async function createProductAction(
  title: string,
  description: string,
  imageUrl: string,
  categoryId: string
) {
  const category = parseInt(categoryId);
  const session = await getServerSession(authOptions);
  const authorId: number = parseInt(session?.user?.id);
  const data = await createProduct(
    title,
    description,
    imageUrl,
    category,
    authorId
  );
  revalidatePath("/dashboard");
  return data;
}

export async function deleteProductAction(id: number) {
  const comments = await deleteAllCommentsByProductId(id);
  const product = await deleteProduct(id);
  revalidatePath("/dashboard");
  return { comments, product };
}

export async function updateProductAction(
  id: number,
  title: string | undefined,
  description: string | undefined,
  imageUrl: string | undefined,
  categoryId: number | undefined
) {
  await updateProduct(id, title, description, imageUrl, categoryId);
  revalidatePath(`/dashboard/edit/${id}`);
}

export async function createCategoryAction(category: string) {
  const data = await createCategory(category);
  revalidatePath("/dashboard");
  return data;
}

export async function createCommentAction(productId: number, body: string) {
  const session = await getServerSession(authOptions);
  const authorId = parseInt(session?.user.id);
  const data = await createComment(productId, authorId, body);
  revalidatePath(`/product/${productId}`);
  return data;
}
