import { useState } from "react";
import AddPostView from "./AddPostView";
import { AddPostModal } from "./AddPostModal";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();
  const modal = new AddPostModal();
  const [form, setForm] = useState(modal.state);
  const onInputChange = (key: string, value: string): void => {
    setForm({ ...form, [key]: value });
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);

    axios
      .post("http://localhost:4000/posts", form)
      .then(() => toast.success("Post Successfully Added!"))
      .then(() => navigate("/"))
      .catch((err) => toast.error(`Error! ${err}`));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleOnSubmit={handleOnSubmit} />
  );
};

export default AddPostController;
