import { Field } from "formik";


interface IProps {
  name: string;
  label ?: string;
  className?: string;
  [rest: string]: any;
}

const Textarea: React.FC<IProps> = ({ name, ...rest }) => {
  return (
    <Field as="textarea" name={name} id={name} {...rest} className="form-textarea" />
  )
}

export default Textarea;