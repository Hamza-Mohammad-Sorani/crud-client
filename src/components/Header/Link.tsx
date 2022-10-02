import React from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  path: string;
  name: string;
  className?: string;
}

const Link: React.FC<IProps> = ({ path, name, className }) => {
  className = ["Link", className].join(" ");
  return (
    <NavLink to={path} className={className}>
      {name}
    </NavLink>
  )
}

export default Link