"use client";

import Link from "@twofold/framework/link";
import { Book } from "../../lib/database";
import { useOptimistic, useTransition } from "react";
import { useRouter } from "@twofold/framework/use-router";

export default function Bookshelf({
  allBooks,
  currentSlug,
}: {
  allBooks: Book[];
  currentSlug: string;
}) {
  let { navigate } = useRouter();
  let [isPending, startTransition] = useTransition();
  let [selectedSlug, setSelectedSlug] = useOptimistic(currentSlug);

  function navigateToBook(slug: string) {
    startTransition(() => {
      setSelectedSlug(slug);
      navigate(`/books/${slug}`);
    });
  }

  return (
    <div
      data-transitioning={isPending ? "" : undefined}
      className="z-10 flex items-center bg-black"
    >
      {allBooks.map((book) => (
        <Link
          href={`/books/${book.slug}`}
          key={book.slug}
          className="block"
          onClick={() => navigateToBook(book.slug)}
        >
          <img
            src={book.image}
            alt={book.title}
            className={`
              relative block h-[120px]
              transition duration-[0.6s] ease-[cubic-bezier(0,0.55,0.45,1)]
              ${
                selectedSlug === book.slug
                  ? "z-20 scale-[1.1] rounded-b shadow-md shadow-black/40"
                  : "z-10"
              }
              ${
                book.slug === allBooks[0].slug &&
                selectedSlug === allBooks[0].slug
                  ? "origin-top-left"
                  : book.slug === allBooks[allBooks.length - 1].slug &&
                      selectedSlug === allBooks[allBooks.length - 1].slug
                    ? "origin-top-right"
                    : "origin-[50%_0%]"
              }
            `}
          />
        </Link>
      ))}
    </div>
  );
}
