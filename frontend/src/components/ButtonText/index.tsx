

interface ButtonTextProps {
  className?: string;
  name: string;
  icon?: any;
}

export const ButtonText = ({
  className,
  name,
  icon: Icon,
}: ButtonTextProps & { icon?: React.ComponentType<any> }) => {
const styles = `flex gap-2 items-center text-sm text-rose-400 hover:brightness-90 ${className}`

  return (
    <button className={styles}>
      {Icon && <Icon className="size-4" />}
      <span>{name}</span>
    </button>
  );
};
