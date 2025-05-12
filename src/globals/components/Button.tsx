
interface ButtonProps {
  onClick?: () => void;
  type: string;
  children: React.ReactNode;
  color: string;
}


const Button = ({ onClick, children, color, type = 'button' }: ButtonProps & { type?: 'submit' | 'reset' | 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${color} text-white rounded`}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button