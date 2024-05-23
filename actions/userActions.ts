"use server";
import { z } from "zod";
import db from "@/db/drizzle";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

const FormSchema = z.object({
  id: z.string(),
  fname: z.string().min(1, "Please enter your first name"),
  lname: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  created_at: z.string(),
  updated_at: z.string(),
});
const CreateUser = FormSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type State = {
  errors?: {
    fname?: string[] | undefined;
    lname?: string[] | undefined;
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  message?: string | null;
};

export async function createUser(
  prevState: State = { message: null, errors: undefined },
  formData: FormData
): Promise<State> {
  const validatedFields = CreateUser.safeParse({
    fname: formData.get("fname"),
    lname: formData.get("lname"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create User.",
    };
  }

  const id = crypto.randomUUID();
  const date = new Date();
  const { fname, lname, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if email already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));
  console.log(existingUser);
  if (existingUser.length > 0) {
    return {
      message: "Email already exists.",
    };
  }

  try {
    await db.insert(users).values({
      id: id,
      fname: fname,
      lname: lname,
      email: email,
      password: hashedPassword,
      image: "image.png",
      created_at: date,
      updated_at: date,
    });
  } catch (error) {
    return {
      errors: prevState.errors,
      message: "Database Error: Failed to create user",
    };
  } finally {
    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}
