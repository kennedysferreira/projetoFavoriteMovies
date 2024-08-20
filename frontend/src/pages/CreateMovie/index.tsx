import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Main } from "../../components/Main";
import { Page } from "../../components/Page";
import { MdArrowBack, MdAdd, MdClose } from "react-icons/md";
import { Tag } from "../../components/Tags";
import { Button } from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { toast } from "sonner";

export const CreateMovie = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  function handleAddTag() {
    if (tagInput.trim() !== "" && !tags.includes(tagInput))
      setTags([...tags, tagInput]);

    setTagInput("");
  }

  function handleRemoveTag(tag: string) {
    setTags(tags.filter((tagRemove) => tagRemove !== tag));
  }

  function handleTagInput(newTag: string) {
    setTagInput(newTag);
  }

  function handleSaveMovie() {
    api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });
    navigate(-1);
    console.log(title, rating, description, tags);
  }

  return (
    <Page>
      <Header setSearch={() => navigate(-1)} />
      <Link to={"/"}>
        <ButtonText
          className="mt-8 px-36"
          icon={MdArrowBack}
          name={"Back"}
        ></ButtonText>
      </Link>
      <Main className="overflow-y-scroll space-y-10 px-1">
        <h1 className="text-3xl text-white font-bold">New title</h1>
        <div className="flex gap-10">
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></Input>
          <Input
            type="number"
            placeholder="Your grade (from 0 to 5)"
            onChange={(e) => {
              if (Number(e.target.value) > 5 || Number(e.target.value) < 0) {
                toast.warning("Please enter a number between 0 and 5");
                return;
              }
              setRating(Number(e.target.value));
            }}
          ></Input>
        </div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="w-full min-h-60 text-sm bg-zinc-800 px-6 py-4 text-zinc-400 rounded-lg focus:outline-none  resize-none"
          placeholder="Movie description"
        ></textarea>
        <div className="space-y-6">
          <span className="text-lg text-zinc-400">Tags</span>
          <div className="bg-zinc-950 rounded-lg p-4 mt-2 flex gap-6">
            {tags.map((tag) => (
              <Tag
                key={tag}
                name={tag}
                isCreate
                icon={MdClose}
                onRemove={() => handleRemoveTag(tag)}
              ></Tag>
            ))}
            <Tag
              icon={MdAdd}
              name="New tag"
              isCreate={false}
              onChange={handleTagInput}
              onAdd={handleAddTag}
            ></Tag>
          </div>
        </div>
        <div className="flex gap-10 ">
          <Button
            className="bg-zinc-950 flex-1 hover:bg-gray-900"
            onClick={() => {
              setTitle("");
              setRating(0);
              setDescription("");
              setTags([]);
              window.location.reload();
            }}
          >
            <span className="text-neutral-200">Delete movie</span>
          </Button>
          <Button className="flex-1" onClick={handleSaveMovie}>
            <span>Save Changes</span>
          </Button>
        </div>
      </Main>
    </Page>
  );
};
