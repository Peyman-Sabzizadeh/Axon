import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";
import clsx from "clsx";

type ErrorProps = {
  message?: string;
  children?: ReactNode;
  className?: string;
};

export function Error({ message, children, className }: ErrorProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-md border border-red-300 bg-red-100 px-4 py-2 text-sm text-red-800",
        className,
      )}
    >
      <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
      <span>{children || message || "Something went wrong."}</span>
    </div>
  );
}
