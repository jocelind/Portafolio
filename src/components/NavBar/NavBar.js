import React, { useState } from "react";
import * as S from "./NavBar.styles";

const NavBar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);
  const clickItemNav = (item) => {
    console.log(item);
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      <S.ContainerNavBar>
        <S.ContainerLogo>
          <S.ImageLogo src="/img/foto.jpg" alt="Logo Ivan" />
          <div>
            <h1>Ricardo Arias</h1>
            <h2>Front-end Developer</h2>
          </div>
        </S.ContainerLogo>
        <S.ContainerBurguer
          onClick={() => setShowMenuBurguer(!showMenuBurguer)}
        >
          <S.BurguerMenu />
          <S.BurguerMenu />
          <S.BurguerMenu />
        </S.ContainerBurguer>

        <S.ContainerItems showMenuBurguer={showMenuBurguer}>
          <p onClick={() => clickItemNav("about-me")}>About Me</p>
          <p onClick={() => clickItemNav("projects")}>Projects</p>
          <S.Button onClick={() => clickItemNav("contact")}>
            {" "}
            🤙 Contact me
          </S.Button>
        </S.ContainerItems>
      </S.ContainerNavBar>
    </div>
  );
};

export default NavBar;
