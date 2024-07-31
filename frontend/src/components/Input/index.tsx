interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: any;
}

export const Input = ({
  icon: Icon,
  className,
  ...props
}: InputProps & { icon?: React.ComponentType<any> }) => {
  const styles = `flex items-center gap-4 bg-zinc-800 rounded-lg flex-1 text-sm px-6 py-4 text-zinc-400 ${className}`
  return (
    <div className={styles}>
      {Icon && <Icon className="text-zinc-400 size-5" />}
      <input
        className="bg-transparent w-full focus:outline-none"
        {...props}
      />
    </div>
  );
};
