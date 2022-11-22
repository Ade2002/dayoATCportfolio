const Fieldset = ({
  labelContent,
  LabelFor,
  inputType,
  inputName,
  inputPlaceholder,
  inputId,
  inputValues,
  onchange
}) => {
  return (
    <fieldset>
      <legend>
        <label htmlFor={LabelFor}>{labelContent}</label>
      </legend>
      <input
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValues}
        onChange={onchange}
      />
    </fieldset>
  )
}
export default Fieldset
