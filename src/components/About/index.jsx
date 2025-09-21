export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">About QuantumX</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto my-6"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="mb-4 text-gray-300">
              We partner with teams to build systems that are{" "}
              <strong>fast</strong>, <strong>secure</strong>, and{" "}
              <strong>scalable</strong> from day one. Our playbook spans AI/ML,
              cloud-native architecture, and product acceleration.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#00E5FF]" />
              Time-to-value measured in <strong>weeks</strong>, not months.
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_#8A2BE2]" />
              Architecture you can <strong>own</strong> after handoff.
            </div>
          </div>

          {/* Principles */}
          <div className="bg-[#131317] border border-white/10 rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Principles</h3>
            <ul className="space-y-2 text-gray-300">
              <li>⚡ Innovation First</li>
              <li>🔒 Secure by Design</li>
              <li>🌍 Global Impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
