
import "./FormInput.css"

const FormInput = ({id,labelName, placeholder, inputType, ...rest }) => {
  return (
    <div  >
      <label  className="label" htmlFor={id}>{labelName}
      </label>
      <input className="form-input"
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
