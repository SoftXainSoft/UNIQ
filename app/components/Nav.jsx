import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </>
  );
};

export default NavLinks;
