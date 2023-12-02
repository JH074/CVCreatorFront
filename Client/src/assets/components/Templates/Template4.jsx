
import React from "react";

export default function Template4() {
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
    <article className="bg-white mb-12 flex flex-row items-center justify-center h-screen md:ml-[10%] mr-[2%] ml-[2%] md:mr-[10%] lg:ml-[25%] lg:mr-[25%]">
      <section className={`flex flex-col gap-3 items-start justify-center border-2 border-[${backgroundColor}] m-2 lg:m-12  h-5/6 w-2/5`}>
        <div>
          {infoPersonalData.map((inputs, index) => (
            <div className=" p-2 lg:p-8 w-full" key={index}>
              <h1 className="lg:text-lg font-bold lg:text-5xl lg:mb-4">
                {" "}
                {inputs.primerNombre} {inputs.primerApellido}
              </h1>
              <h2 className="lg:text-xl"> {inputs.profesion}</h2>
            </div>
          ))}
        </div>

        <div className="flex gap-3 flex-col ml-2 mr-2 lg:ml-8 lg:mr-8">
          <h4 className="lg:lg:text-lg font-bold">INFORMACION DE CONTACTO</h4>
          {infoPersonalData.map((inputs, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <div className="flex items-center gap-2 flex-row w-[8%] h-[8%] lg:w-[10%] lg:h-[20%]">
                {" "}
                <img src="/img/llamada-telefonica.png" alt="telefono" />
                <p className="text-sm lg:text-base">{inputs.numeroTelefonico}</p>
              </div>
              <div className="flex items-center gap-2 flex-row w-[8%] h-[8%] lg:w-[10%] lg:h-[20%]">
                <img src="/img/email.png" alt="" />
                <p className="text-sm lg:text-base"> {inputs.segundoApellido}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 flex-col ml-2 mr-2 lg:ml-8 lg:mr-8">
          <h4 className="lg:lg:text-lg font-bold">HABILIDADES</h4>
          {infoHabilidadesData.map((skill, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <p className="text-sm lg:text-base">{skill.habilidad}</p>
              <p className="text-sm lg:text-base">{skill.proficiencia}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 flex-col ml-2 mr-2 lg:ml-8 lg:mr-8">
          <h4 className="lg:text-lg font-bold">EDUCACION</h4>
          {infoEducacionData.map((education, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <p className="text-sm lg:text-base">
                {education.Titulo} | {education.Fecha_Inicio}{" "}
                {education.Fecha_Fin}
              </p>
              <p className="text-sm lg:text-base">
                {education.Nom_Inst} - {education.Ciudad}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 flex-col ml-2 mr-2 lg:ml-8 lg:mr-8">
          <h4 className="lg:text-lg font-bold">IDIOMAS</h4>
          {infoIdiomasData.map((language, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <p className="text-sm lg:text-base">
                {language.idioma} - {language.fluidez}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-12 items-start justify-center  h-screen w-3/5">
        <div className="flex gap-3 flex-col  lg:ml-8 lg:mr-8">
          {infoPersonalData.map((inputs, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <h4 className="lg:text-lg font-bold">ACERCA DE</h4>
              <p className="text-sm lg:text-base">{inputs.acercaDe}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2s flex-col  lg:ml-8 lg:mr-8">
          {infoProfesionalData.map((experience, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <h4 className="lg:text-lg font-bold">EXPERIENCIA LABORAL</h4>
              <p className="text-sm lg:text-base">
                {experience.Empresa} | {experience.Fecha_Inicio} -{" "}
                {experience.Fecha_Fin}{" "}
              </p>
              <p className="text-sm lg:text-base">{experience.Cargo}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2s flex-col lg:ml-8 lg:mr-8">
          {infoCertificacionData.map((experience, index) => (
            <div className="gap-3 flex flex-col" key={index}>
              <h4 className="lg:text-lg font-bold">CERTIFICADOS</h4>
              <p className="text-sm lg:text-base">
                {experience.Titulo} | {experience.Fecha_Inicio} -{" "}
                {experience.Fecha_Fin}
              </p>
              <p className="text-sm lg:text-base">
                {experience.Nom_Inst} - {experience.Ciudad}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
