interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
  children?: React.ReactNode;
  icon?: any;
}

export const Button = ({icon: Icon, className, children, ...props }: ButtonProps & {icon?: React.ComponentType<any>}) => {
const combinedClasses = `${className} py-3 px-8 bg-pink-400 rounded-lg text-zinc-800  flex justify-center items-center gap-2`;

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
};
