export default function Contact() {
  return (
    <section className="py-20 bg-[#0F0F12] text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Get in Touch
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto my-6"></div>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <form className="bg-[#131317] border border-white/10 rounded-2xl p-6 shadow-lg">
            <div className="mb-4">
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-[#0F0F12] border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-[#0F0F12] border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg bg-[#0F0F12] border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-500/30 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-2">
              📍 123 Innovation Street, Bengaluru, India
            </p>
            <p className="text-gray-400 mb-2">📧 hello@scaleonline.com</p>
            <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>

            <h3 className="mt-6 font-semibold">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="text-cyan-400 hover:text-white transition"
              >
                🌐 LinkedIn
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-white transition"
              >
                🐦 Twitter
              </a>
              <a
                href="#"
                className="text-cyan-400 hover:text-white transition"
              >
                📸 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
