export const Main = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const style = ` mx-36 mt-6 mb-10 max-h-screen overflow-y-scroll scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-pink-400 flex-col ${className} `;
  return <main className={style}>{children}</main>;
};
