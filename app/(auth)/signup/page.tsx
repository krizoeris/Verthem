import Link from "next/link";

import { Button } from "@/components/ui/button";
import SignupForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};
export default function SignUpPage() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-balance text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>
      <div className="grid gap-4">
        <SignupForm />
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-muted-foreground"></div>
          <span className="flex-shrink mx-4 text-muted-foreground text-sm">
            OR LOGIN WITH
          </span>
          <div className="flex-grow border-t border-muted-foreground"></div>
        </div>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
