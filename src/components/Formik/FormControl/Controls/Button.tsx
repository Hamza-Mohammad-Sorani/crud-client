import React, { ReactNode } from 'react'
import { IVarient } from '../../FormComponent';

export interface IButton {
  varient: IVarient;
  buttonBordered?: boolean;
  className?: string;
  children: ReactNode;
  [rest: string]: any;
}

const Button: React.FC<IButton> = ({varient, buttonBordered, className, children, ...rest}) => {
  if (buttonBordered) className = ['Button-border', `Button-border-${varient}` , className].join(" ");
  else className = ['Button', `Button-${varient}`, className].join(" ");
  
  return (
    <button className={className} {...rest}>
      { children }
    </button>
  )
}

export default Button