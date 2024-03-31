import "./App.css";
import DivOptions from "./components/DivOptions.jsx";
import Buttons from "./components/Buttons.jsx";

export default function App() {
  return (
    <main>
      <DivOptions />
      <fieldset>
        <Buttons style="default"/>     
      </fieldset>
      <br />
      <br />
      <fieldset>
        <Buttons style="glass"/>
      </fieldset>
      <br />
      <br />
    </main>
  );
}
