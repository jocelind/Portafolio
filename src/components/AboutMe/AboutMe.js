import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";
import foto from "../../images/projects/foto.jpg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/Ricardo3105",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/in/ricardo-arias-591398166/",
      logo: logoLinkeind,
    },
    // {
    //   name: "Youtube",
    //   link: "https://www.youtube.com/channel/UC2Gv4AvSJOPFQ6pjGFk7U2g",
    //   logo: logoYoutube,
    // },
  ];

  return (
    <S.ContainerAboutMe id="about-me" style={{ marginTop: 85 }}>
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋🏼 Hello, i'm</p>
            <p>Ricardo Arias</p>
            <p>Front-end Developer</p>
          </S.Title>
          <S.DescriptionText>
            <p>
              ¡Hola! Soy un ingeniero de sistemas apasionado por el mundo del
              desarrollo y con más de 4 años de experiencia en el campo. Soy una
              persona proactiva y entusiasta, siempre buscando aprender cosas
              nuevas y enfrentar nuevos desafíos en mi carrera profesional.
            </p>
            <p>
              ¡Gracias por visitar mi portfolio! Si deseas conocer más sobre mis
              proyectos y experiencias, no dudes en contactarme.
            </p>
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
          <img src={foto} alt="Ricardo Arias" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
