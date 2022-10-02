import { Field } from "formik";


interface IProps {
  name: string;
  [rest: string]: any;
}

const Input: React.FC<IProps> = ({ name, className, ...rest }) => {
  return (
    <Field name={name} id={name} {...rest} className={["form-input", className].join(" ")} />
  )
}

export default Input;