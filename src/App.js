import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Nav from "./Nav"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
    <div className="App">
      <Nav />
        <div className="content">
          <Routes>

            <Route path="/" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />

          </Routes>
     
        </div>
    </div>
  </Router> 
  );
}

export default App;
