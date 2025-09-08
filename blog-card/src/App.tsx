import blogThumbnail from "./assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import { BlogCard } from "./BlogCard";
import "./index.css";

export default function App() {
  const blog = {
    badge: "Interior",
    title: "Top 5 Living Room Inspirations",
    description:
      "Curated vibrants colors for your living, make it pop & calm in the same time.",
    url: "#",
    image: blogThumbnail,
    imageAlt: "Spacejoy furniture and decoration",
  };

  return (
    <div className="relative h-screen flex justify-center px-[17.5px]">
      <BlogCard {...blog} />
    </div>
  );
}
