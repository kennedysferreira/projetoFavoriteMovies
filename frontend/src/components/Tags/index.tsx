export const Tag = ({name}: { name: string}) => {
  return (
    <span className="bg-zinc-700 rounded-lg px-4 py-2 text-neutral-200 text-sm">
      <span>{name}</span>
    </span>
  )
}