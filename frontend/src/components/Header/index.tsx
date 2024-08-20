import { Link, useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../../hook/auth";
import { api } from "../../services/api";
import avatarProfile from "../../assets/avatarProfile.svg";
import { useEffect, useRef, useState } from "react";

export const Header = ({ setSearch }: { setSearch: any }) => {
  const { user } = useAuth();

  function handleLogout(e: any) {
    e.preventDefault();
    localStorage.removeItem("@favoriteMovies:user");
    localStorage.removeItem("@favoriteMovies:token");
    window.location.reload();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarProfile;

  return (
    <header className="w-full py-6 px-28 flex justify-between gap-16 items-center bg-zinc-900 border-b-[1px] border-b-zinc-600">
      <h1 className="text-2xl font-bold text-rose-400">FavoriteMovies</h1>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for title"
        icon={CiSearch}
        type="text"
      />
      <Link to="/profile" className="flex items-center gap-4">
        <div className="flex flex-col items-end gap-1">
          <h2 className="text-lg font-bold text-white">{user.name}</h2>
          <button
            onClick={handleLogout}
            className=" text-zinc-400 hover:brightness-110 transition-colors duration-300 ease-linear"
          >
            Logout
          </button>
        </div>
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={avatarUrl}
          alt="profile"
        />
      </Link>
    </header>
  );
};
