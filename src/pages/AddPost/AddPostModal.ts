import { APIPostType } from "./../../constants/Types";
import { v4 } from "uuid";

export class AddPostModal {
  state: APIPostType = {
    id: v4(),
    date: new Date().toISOString(),
    text: "",
    title: "",
    user: "",
  };
}
