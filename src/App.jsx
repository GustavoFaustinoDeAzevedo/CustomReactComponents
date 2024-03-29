import './App.css'
import Button from './components/Button.jsx'
import CheckBox from './components/CheckBox.jsx'
import {useState} from 'react'

export default function App() {
  const [isDashed, setIsDashed] = useState(false);
  
  function dashedHandler(){
    setIsDashed((previousState) =>{ 
      const changeState = !previousState;
      return changeState;
    })
  }
  return (
    <main>
      <CheckBox onClick={dashedHandler}>Dashed</CheckBox>
      <CheckBox>Disable</CheckBox>
      <fieldset>
        <legend>Default Styles</legend>
        <Button type="primary" isDashed>Primary</Button>
        <Button type="secondary" isDashed>Secondary</Button>
        <Button type="danger" isDashed>Danger</Button>
        <Button type="warning" isDashed>Warning</Button>
        <Button type="serious-warning" isDashed>Serious Warning</Button>
        <Button type="light" isDashed>Light</Button>
        <Button type="dark" isDashed>Dark</Button>
        <Button type="success" isDashed>Success</Button>
      </fieldset>
      <br/>
      <br/>
      <fieldset>
      <legend>Glass Styles</legend>
        <Button type="primary" glass>Primary</Button>
        <Button type="secondary" glass>Secondary</Button>
        <Button type="danger" glass>Danger</Button>
        <Button type="warning" glass>Warning</Button>
        <Button type="serious-warning" glass>Serious Warning</Button>
        <Button type="light" size="medium" shape="round" glass>Light</Button>
        <Button type="dark" size="medium" shape="round" glass >Dark</Button>
        <Button type="success" size="medium" shape="round" glass>Success</Button>
      </fieldset>
      
      
      <br/>
      <br/>
      
    </main>
    
  )
}
