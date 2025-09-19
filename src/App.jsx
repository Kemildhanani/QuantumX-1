import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Header */}
      <header style={{ position: "sticky", top: 0, background: "#0D0D0D", padding: "14px 0" }}>
        <div className="container nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" className="logo" style={{ fontWeight: "bold", fontSize: "20px" }}>
            QuantumX
          </Link>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link to="/about">About</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/showcase">Showcase</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Link className="btn btn-ghost" to="/solutions">Explore</Link>
            <Link className="btn btn-primary" to="/contact">Start Now</Link>
          </div>
        </div>
      </header>

      {/* Routes */}
      <main>
        <Routes>
          {/* Home (all sections combined) */}
          <Route
            path="/"
            element={
              <>
                {/* Hero */}
                <section style={{ padding: "80px 0", textAlign: "center" }}>
                  <h1>Shaping the Future with <span style={{ color: "#8A2BE2" }}>Quantum Innovation</span></h1>
                  <p>We craft scalable platforms and intelligent products at quantum speed.</p>
                  <div style={{ marginTop: "20px" }}>
                    <Link className="btn btn-primary" to="/contact">Start Now</Link>
                    <Link className="btn btn-ghost" to="/solutions">Learn More</Link>
                  </div>
                </section>

                {/* About */}
                <section id="about" style={{ padding: "60px 0" }}>
                  <h2>About QuantumX</h2>
                  <p>
                    We partner with teams to build systems that are <strong>fast</strong>, 
                    <strong> secure</strong>, and <strong>scalable</strong> from day one.
                  </p>
                </section>

                {/* Solutions */}
                <section id="solutions" style={{ padding: "60px 0", background: "#111" }}>
                  <h2>Solutions & Services</h2>
                  <ul>
                    <li>AI & Machine Learning</li>
                    <li>Cloud Transformation</li>
                    <li>Blockchain & Quantum Tech</li>
                    <li>Custom Software</li>
                  </ul>
                </section>

                {/* Showcase */}
                <section id="showcase" style={{ padding: "60px 0" }}>
                  <h2>Ready to Transform?</h2>
                  <p>Let’s scope a sprint and land meaningful wins in a few weeks.</p>
                  <Link className="btn btn-primary" to="/contact">Book a Strategy Call</Link>
                </section>

                {/* Testimonials */}
                <section id="testimonials" style={{ padding: "60px 0", background: "#111" }}>
                  <h2>What Leaders Say</h2>
                  <blockquote>“Decision latency dropped 70% after QuantumX rebuilt our pipeline.”</blockquote>
                  <blockquote>“Traffic surges are non-events now. Infra is boring—in the best way.”</blockquote>
                  <blockquote>“Security posture went from good to great—and we’re shipping faster.”</blockquote>
                </section>

                {/* Contact */}
                <section id="contact" style={{ padding: "60px 0" }}>
                  <h2>Contact QuantumX</h2>
                  <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch."); }}>
                    <input type="text" placeholder="Your name" required /><br />
                    <input type="email" placeholder="Email" required /><br />
                    <textarea placeholder="What would you like to build?" required></textarea><br />
                    <button type="submit">Send</button>
                  </form>
                </section>
              </>
            }
          />

          {/* Other Routes */}
          <Route path="/about" element={<h2>About Page</h2>} />
          <Route path="/solutions" element={<h2>Solutions Page</h2>} />
          <Route path="/showcase" element={<h2>Showcase Page</h2>} />
          <Route path="/contact" element={<h2>Contact Page</h2>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px", textAlign: "center", background: "#0D0D0D", color: "#fff" }}>
        <p>© {new Date().getFullYear()} QuantumX. All rights reserved.</p>
        <p>
          <a href="#">LinkedIn</a> · <a href="#">Twitter</a> · <a href="#">GitHub</a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
