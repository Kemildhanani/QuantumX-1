import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layouts from "./layouts/Layouts";
import RouteName from "./util/RouteName";
import About from "./pages/About";

function App() {
  return (
    <div className="">
      <Router>
        <Layouts>
          <Routes>
            {/* Home */}
            <Route path={RouteName.HOME} element={<Home />} />
            <Route path={RouteName.ABOUT} element={<About />} />
            {/* Other Pages */}
            {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}

            {/* 404 Page */}
            {/* <Route
            path="*"
            element={
              <h1 className="text-center mt-20">404 - Page Not Found</h1>
              }
              /> */}
          </Routes>
        </Layouts>
      </Router>
    </div>
  );
}

export default App;
