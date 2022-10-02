import React, { ReactNode } from 'react'
import { Form } from 'formik'

export interface IForm {
  varient: IVarient;
  className?: string;
  children?: ReactNode;
  [rest: string]: any;
}

export type IVarient = "blue" | "purple" | "success" | "danger" | "warning" | "info" | 'light' | 'dark';


const FormComponent: React.FC<IForm> = ({ className, children, varient, ...rest }) => {
  const formVarient = "Form-" + varient[0].toUpperCase() + varient.substring(1);
  className = ['Form',formVarient , className].join(" ");
  
  return (
    <Form className={className} {...rest}>
      {children}
    </Form>
  )
}

export default FormComponent