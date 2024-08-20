interface TagProps {
  name: string;
  isCreate: boolean;
  icon?: any;
  onChange?: (value: string) => void;
  onAdd?: () => void;
  onRemove?: () => void;
}

export const Tag = ({
  name,
  isCreate,
  icon: Icon,
  onChange, 
  onAdd,
  onRemove
}: TagProps & { icon?: React.ComponentType<any> }) => {
 

  return (
    <>
      {isCreate ? (
        <div className="flex gap-2 items-center justify-center bg-zinc-700 rounded-lg px-4 py-2 text-neutral-200 text-sm">
          <input
            readOnly
            className="bg-transparent focus:outline-none cursor-default"
            placeholder={name}
          ></input>
          <button onClick={onRemove}>{Icon && <Icon className="size-5" />}</button>
        </div>
      ) : (
        <div
          className="flex gap-2 items-center justify-center bg-zinc-950 border-dashed border-rose-400 border-2 rounded-lg px-4 py-2 text-neutral-200 text-sm
                     hover:border-rose-600 focus-within:border-solid transition-colors duration-300 ease-linear"
        >
          <input
            onChange={(e) => onChange && onChange(e.target.value)}
            className="bg-transparent focus:outline-none"
            placeholder={name}
          ></input>{" "}
          <button onClick={onAdd}>{Icon && <Icon className="size-5" />}</button>
        </div>
      )}
    </>
  );
};
