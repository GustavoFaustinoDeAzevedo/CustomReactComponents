import { useRef, useState, useEffect } from "react";

 
export default function Button( {buttonID, ...props} ) {
  const typeArray = [
    "primary",
    "secondary",
    "light",
    "dark",
    "success",
    "warning",
    "serious-warning",
    "danger",
  ]
  const sizeArray = [
    "large",
    "medium",
    "small",
  ]
  const shapeArray = [
    "round",
    "square",
    "circle",
  ]

  const [typeResult, setTypeResult] = useState(null);
  const [sizeResult, setSizeResult] = useState(null);
  const [shapeResult, setShapeResult] = useState(null);
  

  const propsToFind = [
    { prop: "type", array: typeArray, setter: setTypeResult },
    { prop: "size", array: sizeArray, setter: setSizeResult },
    { prop: "shape", array: shapeArray, setter: setShapeResult },
  ];

  useEffect(() => {
    propsToFind.forEach(({ prop, array, setter }) => {
      const result = findString(props[prop], array); 
      setter(result);
    });
  }, [props, typeArray, sizeArray, shapeArray]);
  
  const buttonStyle = `btn 
  ${typeResult?typeResult:"light"} 
  ${sizeResult?sizeResult:"medium"}
  ${shapeResult?shapeResult:"round"} 
  ${props.glass?"glass":""} ${props.dashed?"dashed":""}
  ${props.large?"large":""} ${props.medium?"medium":""}
  `
  const key = useRef(buttonID?buttonID:Math.random().toString(36).substring(7));
  const buttonRef = useRef(null);
  // buttonID?buttonID:Math.random().toString(36).substring(7));
  const handleMouseDown = () => {
    buttonRef.current.classList.add("active");
  };

  const handleMouseUp = () => {
    buttonRef.current.classList.remove("active");
    buttonRef.current.classList.add("animating");
    setTimeout(() =>   buttonRef.current.classList.remove("animating"), 200);
  };

  const handleMouseLeave = () => {
    buttonRef.current.classList.remove("active");
  };

  return (
      <button 
        type="button"
        key={key.current}
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={buttonStyle}
      >
        <div>{props.children}</div>
      </button>
  );
}

function findString(str, arr){
  if (str){ 
    const strSplited = str.split(/\s+/); 
    return strSplited[strSplited.findLastIndex(word => arr.includes(word))]; 
  }
  return null;
}
