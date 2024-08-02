interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
  children?: React.ReactNode;
  icon?: any;
}

export const Button = ({
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps & { icon?: React.ComponentType<any> }) => {
  const styles = ` py-3 px-8 bg-rose-400 rounded-lg text-zinc-800  flex justify-center items-center gap-2 hover:brightness-90 hover:transition hover:duration-300 hover:ease-linear ${className}`;

  return (
    <button  className={styles} {...props}>
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
};
