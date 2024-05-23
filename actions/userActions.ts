"use server";
import { z } from "zod";
import { db } from "@/db";
import { Users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  first_name: z.string({
    invalid_type_error: "Please select a first name.",
  }),
  last_name: z.string({
    invalid_type_error: "Please select a last name.",
  }),
  email: z
    .string({
      invalid_type_error: "Please select a email address.",
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
  success?: {},
  errors?: {
    first_name?: string[] | undefined;
    last_name?: string[] | undefined;
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
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
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
  const { first_name, last_name, email, password } = validatedFields.data;
  console.log('out');
  try {
    console.log('in');
    const data = await db.insert(Users).values({
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      image: "image.png",
      created_at: date,
      updated_at: date,
    }).returning();

    return {
      success: data,
      message: "User successfully created",
    };
  } catch (error) {
    console.log(error)
    return {
      errors: prevState.errors,
      message: "Database Error: Failed to create user",
    };
  }
}
