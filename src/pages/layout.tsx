import { ReactNode, Suspense } from "react";
import TwofoldFramework from "@twofold/framework/twofold-framework";
import "./global.css";
import { books } from "@/lib/database";
import Bookshelf from "./bookshelf";
import { Spinner } from "../components/spinner";

export default async function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  let allBooks = await books.all();

  return (
    <html>
      <head>
        <title>Books</title>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        <meta charSet="utf-8" />
        <meta name="Content-Type" content="text/html; charset=utf-8" />
      </head>
      <body>
        <main>
          <div className="group relative flex min-h-screen flex-col bg-black [@media(min-width:500px)]:py-10">
            {/* If our app is transitioning then this div will show its overlay + spinner */}
            <div className="pointer-events-none absolute inset-0 z-[5] flex justify-center bg-black/50 opacity-0 backdrop-blur-sm transition duration-150 ease-out group-has-[[data-transitioning]]:opacity-100">
              <Spinner
                style={{ animationTimingFunction: "steps(12, end)" }}
                className="mt-72 size-8 animate-spin text-white"
              />
            </div>

            <div className="mx-auto max-h-[700px] max-w-[500px]">
              <Bookshelf allBooks={allBooks} currentSlug={params.slug} />

              <div className="relative flex max-h-[500px] min-h-[calc(100vh-120px)] [@media(min-width:500px)]:min-h-[calc(100vh-120px-80px)]">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </div>
          </div>
        </main>
      </body>

      {/* This component is needed to start Twofold */}
      <TwofoldFramework />
    </html>
  );
}

function Loading() {
  return (
    <div className="flex w-full justify-center bg-gray-950 text-gray-100">
      <Spinner
        style={{ animationTimingFunction: "steps(12, end)" }}
        className="mt-32 size-8 animate-spin text-white"
      />
    </div>
  );
}
