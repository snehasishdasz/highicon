import {BrowserRouter as Router , Route, Routes} from "react-router-dom";

import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./Footer/Profile";
import Contact from "./components/Contact";
import Service from "./components/Service";




function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Service/>} />
        <Route path='/aboutme' element={<Profile /> }></Route>
      </Routes>
      {/* <Profile/> */}
    </Router>
  );
}

export default App;
