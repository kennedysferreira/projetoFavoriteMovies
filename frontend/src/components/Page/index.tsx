export const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col max-h-screen w-full bg-zinc-900">
      {children}
    </div>
  );
};
