import Buttons from "./Buttons.jsx";
import Fieldset from "./Fieldset.jsx";

export default function ButtonExamples({title, style}){
  return<>
    <Fieldset title={title}>
      <Buttons style/>
    </Fieldset>
  </>
}