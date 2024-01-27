/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logo_light from "../assets/logo-light.png";

function Logo({ mode = "dark" }) {
  return (
    <>
      {mode === "light" ? (
        <img src={logo_light} alt="logo" />
      ) : (
        <img src={logo} alt="logo" />
      )}
    </>
  );
}

export default Logo;
