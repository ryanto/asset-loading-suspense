import { ReactNode } from "react";
import TwofoldFramework from "@twofold/framework/twofold-framework";
import "./global.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Books</title>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <meta charSet="utf-8" />
        <meta name="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body>
        <main>{children}</main>
      </body>

      {/* This component is needed to start Twofold */}
      <TwofoldFramework />
    </html>
  );
}
