import { signIn } from "@/auth"
import { Button } from "../ui/button"

export function LoginProvider({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button variant="outline" className="w-full" {...props}>Continue with&nbsp;<span className="capitalize">{provider}</span></Button>
    </form>
  )
}
