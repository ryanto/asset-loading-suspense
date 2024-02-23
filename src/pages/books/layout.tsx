import { ReactNode, Suspense } from "react";
import { books } from "../../lib/database";
import Bookshelf from "./bookshelf";
import { Spinner } from "../../components/spinner";

export default async function Layout({
  params,
  children,
}: {
  params: { slug: string };
  children: ReactNode;
}) {
  let allBooks = await books.all();

  return (
    <div className="group flex min-h-screen flex-col">
      <Bookshelf allBooks={allBooks} currentSlug={params.slug} />
      <Suspense fallback={<Loading />}>
        <div className="relative flex">{children}</div>
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div className="mt-24 flex items-center justify-center">
      <Spinner
        style={{ animationTimingFunction: "steps(12, end)" }}
        className="size-8 animate-spin text-black"
      />
    </div>
  );
}
