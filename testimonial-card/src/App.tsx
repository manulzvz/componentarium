import TestimonialCard from "./TestimonialCard";
import profileImg from "./assets/profile-thumbnail.png";

function App() {
  const testimonial = {
    description:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    name: "Sarah Dole",
    username: "sarahdole",
    image: profileImg,
  };

  return (
    <div className="relative">
      <div className="h-screen w-full flex justify-center">
        <TestimonialCard {...testimonial} />
      </div>
    </div>
  );
}

export default App;
