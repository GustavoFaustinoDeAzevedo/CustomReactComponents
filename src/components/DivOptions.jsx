import CheckBox from "./CheckBox.jsx";
import { useState } from "react";


export default function DivOptions() {
  const [isDashed, setIsDashed] = useState(false);

  function dashedHandler() {
    setIsDashed((previousState) => {
      const changeState = !previousState;
      return changeState;
    });
  }
  return (
    <>
      <CheckBox onClick={dashedHandler}>Dashed</CheckBox>
      <CheckBox>Disable</CheckBox>
    </>
  );
}
