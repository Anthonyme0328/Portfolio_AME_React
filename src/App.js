import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Navs from "./Nav"






const App = () => {
  return (
    <Router>
      <div className="App">
        <Navs/>
          <div className="content">
            <Routes>

              <Route path="/about" element={<About/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
              <Route path="/contact" element={<Contact/>} />

            </Routes>
       
          </div>
      </div>
    </Router> 
  );
}

export default App;
