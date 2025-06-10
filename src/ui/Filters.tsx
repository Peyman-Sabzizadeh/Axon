import type React from "react";

function Filters({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-8">{children}</div>;
}
export default Filters;
