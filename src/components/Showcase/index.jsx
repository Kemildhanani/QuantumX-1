export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 rounded-2xl mx-4 md:mx-12 lg:mx-20">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Scale Your Vision?
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
          Let’s build transformative products powered by AI, Cloud, and Next-Gen
          Tech. Partner with us to stay ahead of the curve.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
