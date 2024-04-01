export default function Fieldset({children,title}){
  return<>
    <fieldset>
      <legend>{title}</legend>
      {children}
    </fieldset>
  </>
}