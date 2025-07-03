import { createRoot } from 'react-dom/client';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

const root = createRoot(document.getElementById("root"));

function Greeting(props) {
  return (
    <div>
      <h1>Hello, Good Morning! {props.name} {props.emoji}</h1>
    </div>
  );
}

root.render(
  <div className="app-container">
    <Navbar />
    <main className="content">
      <Greeting name="ABC" emoji="👋" />
      <Greeting name="DEF" emoji="😊" />
      <Greeting name="XYZ" emoji="🫡" />
    </main>
    <Footer />
  </div>
);
