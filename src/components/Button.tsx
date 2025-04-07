
interface ButtonProps {
  onClick: () => void | undefined;
  type: string;
  children: React.ReactNode;
  color: string;
}


const Button = ({ onClick, children, color, type }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 ${color} text-white rounded`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button