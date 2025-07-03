import { createRoot } from 'react-dom/client';

const root =createRoot(document.getElementById("root"));

function Greeting(props){
  return(
    <div>
      <h1>Hello, Good Morning! {props.name} {props.emoji}</h1>
    </div>
  );
}

root.render(
  <>
  <Greeting name="ABC" emoji="👋"/>
  <Greeting name="DEF" emoji="😊"/>
  <Greeting name="XYZ" emoji="🫡"/>
  </>
)
