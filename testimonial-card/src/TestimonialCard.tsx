type TestimonialCardProps = {
  description: string;
  name: string;
  username: string;
  image: string;
};

function TestimonialCard({
  description,
  name,
  username,
  image,
}: TestimonialCardProps) {
  return (
    <article
      aria-label="testimonial"
      className="p-6 bg-white shadow space-y-4 rounded-lg max-w-[340px] max-h-[232px] mt-[200px] mx-auto"
    >
      <div className="flex items-center gap-4">
        <img
          loading="lazy"
          src={image}
          alt={`${name} profile image`}
          className="size-12"
        />
        <div>
          <p className="font-semibold text-lg text-neutral-900">{name}</p>
          <p className="text-sm text-neutral-600">@{username}</p>
        </div>
      </div>

      <blockquote>
        <p className="text-neutral-600">{description}</p>
      </blockquote>
    </article>
  );
}

export default TestimonialCard;
