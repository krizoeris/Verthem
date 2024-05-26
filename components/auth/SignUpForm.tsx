"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createUser, State } from "@/actions/userActions";
import { useFormState } from "react-dom";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SignupForm() {
  const initialState: State = { message: null, errors: {} }; // Ensure initialState matches State type
  const [state, dispatch] = useFormState(createUser, initialState);
  console.log(state);
  return (
    <form action={dispatch}>
      <div className="grid gap-4">
        {state.message && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fname">First Name</Label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="Max"
              aria-describedby="fname-error"
            />
            <div id="fname-error" aria-live="polite" aria-atomic="true">
              {state.errors?.first_name &&
                state.errors.first_name.map((error: string) => (
                  <p className="mt-2 text-sm text-destructive" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              id="name"
              name="last_name"
              placeholder="Robinson"
              aria-describedby="lname-error"
            />
            <div id="lname-error" aria-live="polite" aria-atomic="true">
              {state.errors?.last_name &&
                state.errors.last_name.map((error: string) => (
                  <p className="mt-2 text-sm text-destructive" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            aria-describedby="email-error"
          />
          <div aria-live="polite" aria-atomic="true" id="email-error">
            {state.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            aria-describedby="password-error"
          />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {state.errors?.password &&
              state.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-destructive" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create an account
        </Button>
      </div>
    </form>
  );
}
