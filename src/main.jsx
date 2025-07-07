import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from "./Home.jsx";
import About from "./components/About/About.jsx";
import Contact from './components/Contact/Contact.jsx';
import Login from "./components/Login/Login.jsx";
import Services from './components/Services/Services.jsx';
import CategoryPage from './components/Categories/CategoryPage.jsx';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
