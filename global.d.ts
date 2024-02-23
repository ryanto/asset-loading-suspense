import { HTMLAttributes } from "react";

declare module "react" {
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    precedence?: "high" | "medium" | "low" | "reset";
  }
}
