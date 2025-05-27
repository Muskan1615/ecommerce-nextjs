export const BrandStorySection = () => {
  return (
    <section className="bg-neutral-100 text-black py-10 text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 uppercase">
          Brand&apos;s Story
        </h2>
        <p className="leading-relaxed max-w-7xl mx-auto mb-8">
          In the silence, your outfit roars. It tells your story, whispers your
          secrets, and shouts your dreams. This is LA7. This is your
          beginning. Every thread is a lesson learned, every seam a step taken.
          What you wear today isn’t just fabric—it’s your past victories, your
          present hustle, your future ambition.
        </p>
        <a
          href="/pages/about-us"
          className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </section>
  );
};
