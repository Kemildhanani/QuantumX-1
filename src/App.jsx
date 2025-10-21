import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./layouts/Layouts";


function App() {

  return (
    <>
 
        <Router>
          <Layouts>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layouts>
        </Router>
    </>
  );
}

export default App;
