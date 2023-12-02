import React from "react";

export default function Template2() {
  const infoCertificacionData =
    JSON.parse(localStorage.getItem("certData")) || [];
  const infoHabilidadesData =
    JSON.parse(localStorage.getItem("skillData")) || [];
  const infoPersonalData =
    JSON.parse(localStorage.getItem("personalData")) || [];
  const infoIdiomasData = JSON.parse(localStorage.getItem("langData")) || [];
  const infoEducacionData = JSON.parse(localStorage.getItem("eduData")) || [];
  const infoProfesionalData =
    JSON.parse(localStorage.getItem("profData")) || [];
    const backgroundColor = sessionStorage.getItem("imgColor");

  return (
    <article className="container justify-center">
      <section className="top-side w-1/2 h-3/4 bg-white justify-center mx-auto">
        {infoPersonalData.map((inputs, index) => (
          <div
            className="container w-full bg-white p-2 break-words"
            key={index}
          >
            <p className="text-5xl">
              {" "}
              {inputs.primerNombre} {inputs.segundoNombre}
            </p>
            <p className="text-5xl mb-2"> {inputs.primerApellido}</p>
            <p className="text-3xl"> {inputs.profesion}</p>
            <div className="flex flex-row ">
              <p> {inputs.numeroTelefonico}</p>
              <p> {inputs.segundoApellido}</p>
            </div>
            <p> {inputs.acercaDe}</p>
          </div>
        ))}
      </section>

      <section className="container-2 w-1/2 h-3/4 bg-white flex flex-row justify-center mx-auto ">
        <section className="left-side w-1/2 p-4">
          {infoCertificacionData.map((experience, index) => (
            <div className="p-2 mb-2" key={index}>
              <h2> CERTIFICADOS</h2>
              <p>
                {experience.Titulo} | {experience.Fecha_Inicio} -{" "}
                {experience.Fecha_Fin}{" "}
              </p>
              <p>
                {experience.Nom_Inst} - {experience.Ciudad}
              </p>
            </div>
          ))}
          {infoHabilidadesData.map((skill, index) => (
            <div key={index}>
              <p>Habilidad: {skill.habilidad}</p>
              <p>Proficiencia: {skill.proficiencia}</p>
            </div>
          ))}

          {infoHabilidadesData.map((skill, index) => (
            <div className="text-black" key={index}>
              <p>Habilidad: {skill.habilidad}</p>
              <p>Proficiencia: {skill.proficiencia}</p>
            </div>
          ))}

          {infoIdiomasData.map((language, index) => (
            <div key={index}>
              <p>Idioma: {language.idioma}</p>
              <p>Fluidez: {language.fluidez}</p>
            </div>
          ))}
        </section>

        <section className="right-side  w-1/2 p-4">
          {infoProfesionalData.map((experience, index) => (
            <div className="p-2 mb-2" key={index}>
              <h2> EXPERIENCIA LABORAL </h2>
              <p>
                {" "}
                Empresa {experience.Empresa} | {experience.Fecha_Inicio}-
                {experience.Fecha_Fin}
              </p>
              <p>Cargo | {experience.Cargo}</p>
              <p>Ciudad | {experience.Ciudad}</p>
            </div>
          ))}

          {infoEducacionData.map((education, index) => (
            <div className=" p-2" key={index}>
              <h2 className="text-black"> EDUCACION </h2>
              <p className="text-black">
                {education.Titulo} | {education.Fecha_Inicio} -{" "}
                {education.Fecha_Fin}
              </p>
              <p className="text-black">
                {education.Nom_Inst} - {education.Ciudad}{" "}
              </p>
            </div>
          ))}
        </section>
      </section>
    </article>
  );
}
