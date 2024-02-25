import { books } from "@/lib/database";

export default async function Page({ params }: { params: { slug: string } }) {
  let slug = params.slug;
  let book = await books.findBySlug(slug);

  return (
    <>
      <link
        rel="stylesheet"
        href={`/css/${slug}.css?delay=1000`}
        precedence="high"
      />

      <div className={`${slug}-styles flex flex-1`}>
        <div className={`background`}>
          <div className="p-4">
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
    </>
  );
}
