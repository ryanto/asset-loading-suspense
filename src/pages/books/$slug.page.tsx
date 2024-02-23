import { books } from "@/lib/database";
import { Spinner } from "../../components/spinner";

export default async function Page({ params }: { params: { slug: string } }) {
  let slug = params.slug;
  let book = await books.findBySlug(slug);

  return (
    <>
      <link
        rel="stylesheet"
        href={`http://localhost:3002/books/${slug}.css?delay=1000`}
      />

      {/* If our page is transitioning then this div will show its overlay + spinner */}
      <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition duration-150 ease-out group-has-[[data-transitioning]]:opacity-100">
        <Spinner
          style={{ animationTimingFunction: "steps(12, end)" }}
          className="size-8 animate-spin text-white"
        />
      </div>

      <div className={`${slug}-styles min-h-[calc(100vh-120px)]`}>
        <div className={`background relative h-full`}>
          <div className="p-4">
            <div className="relative">
              <h1 className="title text-4xl font-bold tracking-tighter">
                {book.title}
              </h1>
              <p className="author">
                By <span className="font-bold">{book.author}</span>
              </p>
              <div className="mt-4">
                <img
                  src={book.image}
                  alt={book.title}
                  className="image float-left mr-6 w-44 rounded-md"
                />
                <div className="description space-y-2">
                  {book.description.split("\n").map((paragraph, index) => (
                    <p key={index} className="leading-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
