import { AddPostViewPropsTypes } from "../../constants/Types";

const AddPostView: React.FC<AddPostViewPropsTypes> = ({
  onInputChange,
  handleOnSubmit,
}) => {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <h2>Add New Post</h2>
      <fieldset>
        <label htmlFor="userName">User Name</label>
        <input
          required
          onChange={(e) => onInputChange("user", e.target.value)}
          id="userName"
          type="text"
          placeholder="ex:Jhon"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          required
          onChange={(e) => onInputChange("title", e.target.value)}
          id="title"
          type="text"
          placeholder="ex:MVC"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="textarea">Description</label>
        <textarea
          required
          onChange={(e) => onInputChange("text", e.target.value)}
          placeholder="Type here..."
          maxLength={100}
          id="textarea"
        ></textarea>
      </fieldset>
      <button>Send</button>
    </form>
  );
};

export default AddPostView;
