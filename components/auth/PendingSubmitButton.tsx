import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function PendingSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
      aria-disabled={pending}
    >
      Send
    </Button>
  );
}
