import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 style={{ letterSpacing: "0px" }}>ForumMVC</h1>
      <NavLink to={"/add-post"}>Add Post</NavLink>
      <NavLink to={"/"}>Posts</NavLink>
    </header>
  );
};

export default Header;
