import { signIn } from "@/auth/auth";
import { Button } from "../ui/button";
import Image from "next/image";

export function LoginProvider({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button variant="outline" className="w-full" {...props}>
        Continue with&nbsp;<span className="capitalize">{provider}</span>{" "}
        {provider === "google" ? (
          <Image
            className="ml-3"
            alt="google icon"
            src="images/google-logo.svg"
            width={20}
            height={20}
          />
        ) : (
          ""
        )}
      </Button>
    </form>
  );
}
