interface ButtonProps{
  description: string,
  action?: () => {}
}

const Button: React.FC<ButtonProps> = ({
  description, action
}) => {
  return (
    <div onClick={action} className="border-2 rounded border-transparent w-2/12 h-8 text-center cursor-pointer bg-green-300 hover:bg-emerald-300 text-xl">
      {description}
    </div>
  )
}

export default Button