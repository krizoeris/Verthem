import { signIn, signOut } from "@/auth";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export function LoginButton({
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
        Continue with&nbsp;<span className="capitalize">{provider}</span>
      </Button>
    </form>
  );
}

export function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <div className="flex items-center justify-center text-verthem-900 hover:text-verthem-700 hover:transition-all">
        <button className="w-[24px] h-[24px]">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
