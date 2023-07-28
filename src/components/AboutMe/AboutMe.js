import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/jocelind",
      logo: logoGithub,
    },
    {
      name: "Linkedind",
      link: "https://www.linkedin.com/feed/",
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
            <p>👋🏼 Hola, soy</p>
            <p>Jocelin Diaz</p>
            <p>Auditor Informatico</p>
          </S.Title>
          <S.DescriptionText>
            <p>
              Analizo los procesos dentro de una empresa e identifico el
              potencial de optimización identificando debilidades y
              disfunciones. Trabajo en un pequeño equipo de hasta tres personas
              y somos el enlace comunicativo entre departamentos y dirección.
              Actuó como observadora y me comunico con todos los departamentos y
              empleados, pero también evaluó los datos y revisando los
              documentos (manuales de la empresa, descripciones de procesos y
              especificaciones de productos).
            </p>
            <p>
              Me ocupo de la resolución de problemas y de investigar las
              oportunidades de mejora. Los resultados obtenidos se discuten con
              los directores de los departamentos pertinentes y se crea una
              estrategia de posibles soluciones y planes de acción. Finalmente,
              todas las recomendaciones se pasan en un informe final que la
              empresa tomará sin carácter vinculante. Es decir, la empresa
              decidirá independientemente que decisiones tomar.
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
        <S.ContainerImage></S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};
export default AboutMe;
