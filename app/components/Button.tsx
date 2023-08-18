interface ButtonProps {
  description: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ description, url }) => {
  return (
    <div
      className="
      border 
      rounded 
      border-green-300 
      h-8 text-center 
      cursor-pointer 
      bg-green-300 
      hover:bg-emerald-300 
      dark:bg-slate-500 
      dark:border-0
      dark:hover:bg-gray-500
      dark:text-gray-300
      text-2xl 
      text-black 
      font-medium 
      w-3/6 
      sm:w-3/12"
    >
      {url ? (
        <a href={url} download="CV_FRANCO_NICOLAS_SILVESTRO.pdf">
          {description}
        </a>
      ) : (
        description
      )}
    </div>
  );
};

export default Button;
