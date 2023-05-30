interface ButtonProps {
    children: React.ReactNode,
    className?: string
}

const Button = ({children, className}: ButtonProps) => {
  return (
    <div>Button</div>
  )
}

export default Button