import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

const NavBar = ({pathname}) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <Link to={"/"} className="navbar-brand ml-5">Weather</Link>
      { pathname !== "/" && <SearchInput cssClass="small input" container={true} />}
    </nav>
  )
}

export default NavBar;