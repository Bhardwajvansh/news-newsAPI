import Navbar from "./Components/Navbar.js";
import Newsarea from "./Components/Newsarea.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Newsarea type={"business"} />
        {/* <Newsarea type={"entertainment"} /> */}
      </Router>
    </>
  );
}

export default App;
