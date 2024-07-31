interface TagProps {
  name: string;
  isCreate: boolean;
  icon?: any;
}

export const Tag = ({
  name,
  isCreate,
  icon: Icon,
}: TagProps & { icon?: React.ComponentType<any> }) => {
  return (
    <>
      {isCreate ? (
        <span className="flex gap-2 items-center justify-center bg-zinc-700 rounded-lg px-4 py-2 text-neutral-200 text-sm">
          <span>{name}</span>
          {Icon && <Icon className="size-5" />}
        </span>
      ) : (
        <span className="flex gap-2 items-center justify-center bg-zinc-950 border-dashed border-pink-400 border-2 rounded-lg px-4 py-2 text-neutral-200 text-sm">
          <span>{name}</span>
          {Icon && <Icon className="size-5" />}
        </span>
      )}
    </>
  );
};
