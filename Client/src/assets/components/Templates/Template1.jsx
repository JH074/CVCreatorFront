import React from "react";

export default function Template1() {
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
    <article className="container m-5 w-1/2 h-3/4 bg-white flex flex-row justify-center mx-auto">
      <section className="left-side w-1/2 p-4 ">
        {infoPersonalData.map((inputs, index) => (
          <div key={index}>
            <p className="text-5xl">
              {" "}
              {inputs.primerNombre} {inputs.segundoNombre}
            </p>
            <p className="text-5xl mb-2"> {inputs.primerApellido}</p>
            <p className="text-3xl"> {inputs.profesion}</p>
            <hr className={`border-t-2 border-[${backgroundColor}`} />
            <div className="flex flex-row ">
              <img
                className=" w-5 h-5"
                src="/img/llamada-telefonica.png"
                alt={inputs.numeroTelefonico}
              />
              <p> {inputs.numeroTelefonico}</p>
              <img className=" w-5 h-5" src="/img/email.png" />
              <p> {inputs.segundoApellido}</p>
            </div>

            <hr className={`border-t-2 border-[${backgroundColor}`} />
          </div>
        ))}

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
            <hr className={`border-t-2 border-[${backgroundColor}`} />
          </div>
        ))}

        {infoIdiomasData.map((language, index) => (
          <div className="p-2 mb-2" key={index}>
            <h2> IDIOMAS </h2>
            <p>
              {language.idioma} - {language.fluidez}
            </p>
            <hr className={`border-t-2 border-[${backgroundColor}`} />
          </div>
        ))}

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

            <hr className={`border-t-2 border-[${backgroundColor}`} />
          </div>
        ))}

        {infoHabilidadesData.map((skill, index) => (
          <div key={index}>
            <p>Habilidad: {skill.habilidad}</p>
            <p>Proficiencia: {skill.proficiencia}</p>
          </div>
        ))}
      </section>

      <section className="right-side w-1/2 p-4">
        {infoPersonalData.map((inputs, index) => (
          <div
            className={`container bg-[${backgroundColor}] p-2 mb-2 break-words`}
            key={index}
          >
            <h4 className="text-white">sobre mi</h4>
            <div
              className="text-white overflow-hidden"
              style={{ wordWrap: "break-word" }}
            >
              {inputs.acercaDe}
            </div>
          </div>
        ))}

        {infoEducacionData.map((education, index) => (
          <div className={`bg-[${backgroundColor} p-2`} key={index}>
            <h2 className="text-white"> EDUCACION </h2>
            <p className="text-white">
              {education.Titulo} | {education.Fecha_Inicio} -{" "}
              {education.Fecha_Fin}
            </p>
            <p className="text-white">
              {education.Nom_Inst} - {education.Ciudad}{" "}
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}
