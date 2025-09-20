import * as React from "react";

export function Button({ children, variant = "primary", ...props }: any) {
  const base = "px-4 py-2 rounded-2xl font-medium transition-all";
  const variants: any = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-400 text-gray-200 hover:bg-gray-800",
    secondary: "bg-gray-700 text-white hover:bg-gray-600"
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}