import { Field } from "formik";
import Label from './Label'


interface IProps {
  name: string;
  options?: IOptions[];
  [rest: string]: any;
}

interface IOptions {
  value: string;
  label: string;
}

const Input: React.FC<IProps> = ({ name, options, ...rest }) => { 
  return (
    <Field name={name} id={name} {...rest} className="form-radio">
      {
        (field: {}) => (
          options && options.map(option => {
            return(
              <>
                <input
                  type="radio" value={option.value}
                  key={option.value} id={option.value}
                  checked={field === option.value}
                  className='capitalize'
                  {...field}
                />
                <Label name={name} label={option.label} />
              </>
            )
          })
        )
      }
    </Field>
  )
}

export default Input;
