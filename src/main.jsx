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
import CategoryDetails from './components/Categories/CategoryDetails.jsx';
import RestaurantsDetail from './components/PopularRestaurants/RestraurantsDetail.jsx';
import Signup from './components/SignUp/Signup.jsx';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/category/:categoryName" element={<CategoryDetails />} />
      <Route path="/hotels/:hotelName" element={<RestaurantsDetail />} />
    </Routes>
  </BrowserRouter>
);
