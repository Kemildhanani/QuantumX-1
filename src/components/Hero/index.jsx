export default function Hero() {
  return (
    <section className="relative py-24">
      {/* Waves */}
      <div className="absolute inset-0 -z-10">
        <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-30 blur-3xl"></span>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm border border-cyan-400/30 bg-cyan-400/10 mb-4">
            ⚛︎ AI • Cloud • Digital Transformation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
            Shaping the Future with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Quantum Innovation
            </span>
          </h1>
          <p className="text-muted max-w-lg mb-6">
            We craft reliable, scalable platforms and intelligent products so
            your ideas move from prototype to impact at quantum speed.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="#contact"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-[#03141A] font-semibold"
            >
              Start Now
            </a>
            <a
              href="#solutions"
              className="px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Code Panel */}
        <div className="bg-[#131317] rounded-2xl border border-white/10 shadow-lg overflow-hidden">
          <pre className="p-6 text-sm font-mono text-cyan-100">
{`// QuantumX: event → features → prediction → action
const pipeline = QX.pipeline({secure:true});

await pipeline.run(async (evt) => {
  const x = QX.features(evt);
  const y = await QX.predict("DemandForecaster-v3", x);
  return QX.route(y).to(["edge","warehouse","crm"]);
});

QX.observe(pipeline).dashboard({SLO:"<45ms", uptime:"99.99%"});`}
            <span className="inline-block w-2 h-5 bg-cyan-100 animate-pulse ml-1"></span>
          </pre>
        </div>
      </div>
    </section>
  );
}
