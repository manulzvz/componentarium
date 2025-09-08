type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  url: string;
};

export function BlogCard({
  description,
  image,
  title,
  url,
  imageAlt = `${title} thumbnail`,
}: BlogCardProps) {
  return (
    <article className="w-[340px] h-max rounded-lg overflow-hidden shadow bg-white">
      <img
        loading="lazy"
        decoding="async"
        fetchPriority="high"
        src={image}
        className="object-cover w-full h-72"
        alt={imageAlt}
      />
      <section className="px-4 py-6 space-y-3 ">
        <div className="space-y-2">
          <span
            aria-label="badge"
            className="text-green-700 rounded-full bg-green-50 border text-sm border-green-200 max-w-max px-2 py-[2px]"
          >
            Interior
          </span>
          <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        </div>

        <div className="space-y-6">
          <p className="font-medium text-neutral-600 line-clamp-2">
            {description}
          </p>
          <a
            href={url}
            role="button"
            className="bg-white rounded inline-flex items-center gap-[6px] font-medium text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:ring focus:border-blue-500"
          >
            <span>Read More</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="fill-indigo-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.4764 9.16658L9.00637 4.69657L10.1849 3.51807L16.6667 9.99992L10.1849 16.4817L9.00637 15.3032L13.4764 10.8332H3.33337V9.16658H13.4764Z" />
            </svg>
            <span className="sr-only">Read {title}</span>
          </a>
        </div>
      </section>
    </article>
  );
}
