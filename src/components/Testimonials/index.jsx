export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya Sharma",
      role: "Product Manager @ FinTech Co.",
      text: "ScaleOnline transformed our legacy stack into a cloud-native powerhouse. Their AI-driven insights boosted our retention by 35%.",
    },
    {
      name: "Rahul Mehta",
      role: "Founder @ HealthTech Startup",
      text: "From MVP to production in record time. The team understood both tech and business deeply — a rare combo!",
    },
    {
      name: "Sofia Martinez",
      role: "CTO @ E-commerce Platform",
      text: "Security, scalability, and speed — ScaleOnline delivered on all three. Couldn’t have asked for a better partner.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#0F0F12]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto my-6"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="bg-[#131317] border border-white/10 rounded-2xl p-6 text-gray-300 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <p className="mb-4 italic">“{review.text}”</p>
              <h4 className="font-semibold text-white">{review.name}</h4>
              <p className="text-sm text-gray-400">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
