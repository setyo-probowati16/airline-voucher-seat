import { Button } from "@/components/ui/button";
import { Loader2, Ticket } from "lucide-react";

interface Props {
  loading: boolean;
}

export function SubmitButton({
  loading,
}: Props) {
  return (
    <Button
      type="submit"
      className="h-12 w-full"
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating Voucher...
        </>
      ) : (
        <>
          <Ticket className="mr-2 h-4 w-4" />
          Generate Voucher
        </>
      )}
    </Button>
  );
}