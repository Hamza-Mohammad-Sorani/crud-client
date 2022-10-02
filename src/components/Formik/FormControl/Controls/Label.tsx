
interface IProps {
  name: string;
  label: any;
  className?: string;
}

const Label: React.FC<IProps> = ({ name, label, className }) => {
  return (
    <label htmlFor={name}
      className={["font-bold capitalize text-gray-600", className].join(' ')}>
      { label }
    </label>
  )
}

export default Label;