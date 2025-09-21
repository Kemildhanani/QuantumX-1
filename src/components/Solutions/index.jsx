export default function Solutions() {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Solutions & Services
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto my-6"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <article className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-gray-300">
              Forecasting, recommendations, NLP & vision. Production-grade
              MLOps.
            </p>
          </article>

          {/* Card 2 */}
          <article className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">Cloud Transformation</h3>
            <p className="text-gray-300">
              Secure, scalable infra on AWS/Azure/GCP with observability by
              default.
            </p>
          </article>

          {/* Card 3 */}
          <article className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold mb-2">
              Blockchain & Quantum Tech
            </h3>
            <p className="text-gray-300">
              Next-gen security, verifiable compute, quantum-ready
              architectures.
            </p>
          </article>

          {/* Card 4 */}
          <article className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition md:col-span-3">
            <h3 className="text-xl font-semibold mb-2">Custom Software</h3>
            <p className="text-gray-300">
              Tailored web, mobile & data platforms with DX your team will love.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
