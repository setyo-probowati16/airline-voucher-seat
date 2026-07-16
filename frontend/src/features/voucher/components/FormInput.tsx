import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FieldError } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export function FormInput({
  label,
  error,
  className,
  ...props
}: Props) {
  return (
    <div>
      <Label
        htmlFor={props.id}
        className="mb-2 block"
      >
        {label}
      </Label>

      <Input
        {...props}
        className={cn(
          error &&
            "border-red-500 focus-visible:ring-red-500",
          className
        )}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}