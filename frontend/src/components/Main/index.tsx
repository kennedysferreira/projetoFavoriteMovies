export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const style = ` mx-36 my-6 space-y-4 max-h-screen overflow-y-scroll scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-pink-400 flex-col ${className} `;
  return <main className={style}>{children}</main>;
};
