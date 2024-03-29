import {useState} from 'react';

export default function CheckBox(props){
  const [checked, setChecked] = useState(false);

  //when the checkbox updates, will update the state
  const handleChange = (e) => {
    props.onClick;
    setChecked(e.target.checked);
  };
  
  return (
    <label className="container">
      <div>{props.children}</div>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={handleChange} 
        />
      <span className="checkmark"></span>
    </label>
  )
}