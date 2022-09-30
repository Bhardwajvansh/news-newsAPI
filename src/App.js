import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsarea from "./Components/Newsarea.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Newsarea key="home" category="" />} />
        <Route
          path="/business"
          element={<Newsarea key="buisness" category="business" />}
        />
        <Route
          path="/science"
          element={<Newsarea key="science" category="science" />}
        />
        <Route
          path="/health"
          element={<Newsarea key="health" category="health" />}
        />
        <Route
          path="/entertainment"
          element={<Newsarea key="entertainment" category="entertainment" />}
        />
        <Route
          path="/technology"
          element={<Newsarea key="technology" category="technology" />}
        />
        <Route
          path="/sports"
          element={<Newsarea key="sports" category="sports" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
