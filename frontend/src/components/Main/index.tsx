export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const style = ` mx-36 mt-6 mb-8 p-1 max-h-screen  scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-rose-400 flex-col ${className} `;
  return <main className={style}>{children}</main>;
};
