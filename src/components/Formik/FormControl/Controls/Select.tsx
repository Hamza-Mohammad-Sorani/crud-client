import { Field } from "formik";


interface IProps {
  name: string;
  options?: string[];
  [rest: string]: any;
}


const Input: React.FC<IProps> = ({ name, options,...rest }) => {
  
  return (
    <Field as="select" name={name} id={name} {...rest} className="form-select" >
      <option
        value={''}
        className='text-capitalize'>
        {'-- Select One --'}
      </option>
      {
        options && options.map(option => {
          return(
            <option
              value={option}
              key={option}
              className='text-capitalize'>
              {option}
            </option>
          )
        })
      }
    </Field>
  )
}

export default Input;