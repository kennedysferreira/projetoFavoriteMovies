export const Header = () => {
    return (
      <header className="w-full py-6 px-28 flex justify-between gap-16 items-center bg-zinc-900">
        <h1 className="text-2xl font-bold text-pink-400">FavoriteMovies</h1>
        <input className="bg-zinc-800 rounded-lg px-4 py-2 text-zinc-400" placeholder="Pesquisar pelo título"ype="text" />
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1">
            <h2 className="text-lg font-bold text-white">Kennedy Ferreira</h2>
            <span className=" text-zinc-400" >sair</span>
          </div>
          <img className="w-16 h-16 rounded-full"  src="https://github.com/kennedysferreira.png" alt="profile" />
        </div>
      </header>
    )
}