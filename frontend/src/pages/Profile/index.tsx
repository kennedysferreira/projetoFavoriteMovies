import {
  MdArrowBack,
  MdOutlineLock,
  MdOutlineMailOutline,
  MdOutlinePersonOutline,
  MdOutlinePhotoCamera,
} from "react-icons/md";
import { ButtonText } from "../../components/ButtonText";
import { Page } from "../../components/Page";
import { Main } from "../../components/Main";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/auth";
import { useEffect, useState } from "react";


export const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : null;
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState("");

  async function handleUpdateProfile(e: any) {
    e.preventDefault();
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword: confirmPassword,
    };
    const avatarFile = "";
    await updateProfile({ user, avatarFile });
  }

  return (
    <Page>
      <div>
        <div className="h-36 bg-zinc-800 flex items-center">
          <Link to={"/"}>
            <ButtonText
              className="px-36"
              icon={MdArrowBack}
              name={"Back"}
            ></ButtonText>
          </Link>
        </div>
      </div>
      <div className="w-48 h-48 flex justify-center m-auto my-4 items-center mt-[-96px] relative">
        <img className="rounded-full" src={avatar} alt="kennedy ferreira" />

        <label
          className="cursor-pointer w-12 h-12 text-xl bg-rose-400 rounded-full absolute flex justify-center items-center right-2 bottom-2"
          htmlFor="avatar"
        >
          <MdOutlinePhotoCamera />
          <input className="hidden" id="avatar" type="file" />
        </label>
      </div>
      <Main>
        <form className="w-96 m-auto space-y-6" action="#">
          <div className="space-y-2">
            <Input
              value={name}
              icon={MdOutlinePersonOutline}
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Input
              value={email}
              icon={MdOutlineMailOutline}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              icon={MdOutlineLock}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="New password"
              icon={MdOutlineLock}
              onChange={(e) => setNewPassword(e.target.value)}
            ></Input>
          </div>
          <Button className="w-full" onClick={handleUpdateProfile}>
            Save
          </Button>
        </form>
      </Main>
    </Page>
  );
};
