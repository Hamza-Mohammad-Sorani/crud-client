import { Input, Textarea, Select, Radio, Checkbox, Date, Label, ErrorMessage } from './Controls'

interface IProps{
  control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date';
  name: string;
  label?: string;
  className?: string;
  [rest:string]: any;
}

const FormControl: React.FC<IProps> = ({ control, className, name, label, ...rest }) => {
  let formControl;
  switch (control) {
    case 'input':
      formControl = <Input name={name} className={className} {...rest}  />
      break;
    case 'textarea':
      formControl = <Textarea name={name} {...rest}  />
      break;
    case 'select':
      formControl = <Select name={name} {...rest}  />
      break;
    case 'radio':
      formControl = <Radio name={name} {...rest}  />
      break;
    case 'checkbox':
      formControl = <Checkbox name={name} {...rest}  />
      break;
    case 'date':
      formControl = <Date name={name} {...rest}  />
      break;
    default:
      formControl = <p className='text-center'>Not Found</p>
      break;
  }
  return (
    <>
      {
        <div>
        {
          label ?
            <Label name={name} label={label} className='col-sm-4' />
          : <></>
        }
        <div className="flex flex-col">
          {formControl}
          <ErrorMessage name={name} />
        </div>
      </div>
      }
    </>
  )
}

export default FormControl;