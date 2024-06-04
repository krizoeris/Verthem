"use client";

import { useFormState } from "react-dom";

import PendingSubmitButton from "../PendingSubmitButton";
import requestPasswordResetAction from "./requestPasswordResetAction";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
type InputErrorsT = {
  email?: string[];
};
type NoErrorFormStateT = {
  error: false;
  message?: string;
};
type ErrorFormStateT = {
  error: true;
  message: string;
  inputErrors?: InputErrorsT;
};

export type RequestPasswordResetFormStateT =
  | NoErrorFormStateT
  | ErrorFormStateT;

const initialState: NoErrorFormStateT = {
  error: false,
};

export default function ForgotPassword() {
  const [state, formAction] = useFormState<
    RequestPasswordResetFormStateT,
    FormData
  >(requestPasswordResetAction, initialState);

  if (!state.error && state.message === "Success") {
    return (
      <div className="bg-zinc-100 rounded-sm px-4 py-8 mb-8">
        <h2 className="font-bold text-lg mb-4">Check your email</h2>
        <p>
          We sent you an email with a link. Open this link to reset your
          password. Carefull, expires ...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-xl font-bold">Request a password reset</h1>
        <p className="mb-4">
          Forgot your password? Enter your account email here and we will send
          you a link you can use to reset your password.
        </p>
      </div>
      <div className="grid gap-4">
        <form action={formAction}>
          <div className="mb-3">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
            {state.error && state?.inputErrors?.email ? (
              <div className="text-red-700" aria-live="polite">
                {state.inputErrors.email[0]}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <PendingSubmitButton />
          </div>
          {state.error && state.message ? (
            <div className="text-red-700" aria-live="polite">
              {state.message}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}
