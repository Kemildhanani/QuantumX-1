import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layouts from "./layouts/Layouts";

function App() {
  return (
    <Router>
      <Layouts>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Other Pages */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20">404 - Page Not Found</h1>
            }
          />
        </Routes>
      </Layouts>
    </Router>
  );
}

export default App;
