import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#131317] py-8 border-t border-white/10">
      <div className="container mx-auto px-6 text-center md:text-left grid md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">ScaleOnline</h2>
          <p className="text-gray-400 mt-2">
            Building next-gen digital solutions powered by AI, Cloud & Blockchain.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300">📧 hello@scaleonline.com</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} ScaleOnline. All rights reserved.
      </div>
    </footer>
  );
}
