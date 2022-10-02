import { Field } from "formik";
import Label from './Label'


interface IProps {
  name: string;
  label?: string;
  className?: string;
  [rest: string]: any;
}

const Input: React.FC<IProps> = ({ name, label, className, ...rest }) => {
  return (
    <Field name={name} id={name} {...rest} className="form-input" />
  )
}

export default Input;