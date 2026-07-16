import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  bordered?: boolean;
}

export function FormSection({
  title,
  icon,
  children,
  bordered = false,
}: Props) {
  return (
    <section className={cn(bordered && "border-t pt-8")}>
      <h2 className="mb-5 flex items-center gap-2 text-lg font-semibold">
        {icon}
        {title}
      </h2>

      {children}
    </section>
  );
}