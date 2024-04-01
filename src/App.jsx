import "./App.css";
import DivOptions from "./components/DivOptions.jsx";
import Buttons from "./components/Buttons.jsx";
import Examples from "./components/Examples.jsx";

export default function App() {
  return (
    <main>
      <DivOptions />
      <Examples title="Default Style" style="default"/>
       <Examples title="Glass Style" style="glass"/>

    </main>
  );
}
