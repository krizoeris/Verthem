"use server";
import { z } from "zod";
import db from "@/db/drizzle";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Please select a name.",
  }),
  email: z
    .string({
      invalid_type_error: "Please select a customer.",
    })
    .email("Invalid email address."),
  password: z
    .string({
      invalid_type_error: "Please enter a valid password.",
    })
    .min(8, "Password must be at least 8 characters long."),
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
    name?: string[] | undefined;
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
    name: formData.get("name"),
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
  const { name, email, password } = validatedFields.data;
  try {
    await db.insert(users).values({
      id: id,
      name: name,
      email: email,
      password: password,
      image: "image.png",
      created_at: date,
      updated_at: date,
    });
    revalidatePath("/login");
    redirect("/login");
  } catch (error) {
    return {
      errors: prevState.errors,
      message: "Database Error: Failed to create user",
    };
  }
}
