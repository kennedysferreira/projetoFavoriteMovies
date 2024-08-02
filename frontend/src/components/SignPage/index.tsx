export const SignPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <body className="w-full h-screen flex ">
      <aside className="w-1/3 bg-zinc-900 flex justify-center items-center mt-[-4rem] ">
        <div className="space-y-12">
          <div>
            <h1 className="text-5xl font-bold text-rose-400">FavoriteMovies</h1>
            <p className="text-sm text-stone-300 ">
              Application to keep track of everything you watch.
            </p>
          </div>
          {children}
        </div>
      </aside>
      <div className="flex-1 bg-[url(./assets/bgSignPage.png)] bg-cover "></div>
    </body>
  );
};
