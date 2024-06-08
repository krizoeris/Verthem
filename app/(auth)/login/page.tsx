import Link from "next/link";

import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import { LoginButton } from "@/components/auth/Buttons";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <LoginForm />
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-muted-foreground"></div>
          <span className="flex-shrink mx-4 text-muted-foreground text-sm">
            OR LOGIN WITH
          </span>
          <div className="flex-grow border-t border-muted-foreground"></div>
        </div>
        <LoginButton provider="google" />
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
