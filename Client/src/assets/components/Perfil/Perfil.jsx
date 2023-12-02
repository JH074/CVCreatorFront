import React, { useState } from "react";
import FileUploader from "./Portada";
import ProfilePicture from "./FotoPerfil";
import { useNavigate } from "react-router-dom";
import {useLogout} from "../../hooks/useLogout";

export default function Perfil() {
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

  const [backgroundImage, setBackgroundImage] = useState(null);
  const [ProfileImage, setProfileImage] = useState(null);
  const navigate = useNavigate()
  const {logout} = useLogout();

  const handleFileSelect = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      setBackgroundImage(reader.result);
      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleProfileSelect = (file) => {
    const photo = new FileReader();

    photo.onload = () => {
      setProfileImage(photo.result);
      console.log(photo.result);
    };

    photo.readAsDataURL(file);
  };


  const handleClick = async (e) =>{
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div> 
    <div className='w-full flex flex-col items-end'>
    <div className="text-sm lg:text-base w-36 m-6 bg-[#0496FF] shadow-md hover:bg-blue-700 text-[#EFEFEF] px-8 py-2 rounded-[10px]">
    <button type='button' onClick={handleClick}> LOG OUT </button>
    </div>
    </div>
    <div>
      <article className="pb-8 relative md:max-md:mr-40 md:max-md:ml-40 lg:mr-96 lg:ml-96 md:mr-20 md:ml-20 items-center justify-center flex flex-col h-auto shadow-[0_6px_5px_0_rgba(0,0,0,0)] shadow-black/50">
        <section className="w-full">
          {/* PORTADA */}
          <div className="bg-gray-400/50 h-96 flex items-center justify-center w-full">
            <div
              className="w-full border-2 h-96 border-b bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="absolute top-80 right-2">
              <FileUploader onFileSelect={handleFileSelect} />
            </div>
          </div>
          {/* FOTO PERFIL */}
          <div className=" h-[20px] flex lg:justify-normal lg:flex-none items-center justify-center w-full">
            <div
              className="bg-gray-300 absolute md:top-[260px] md:left-[40px] lg:top-[260px] lg:left-[40px] w-60 h-60 rounded-full border-2  bg-cover bg-left"
              style={{ backgroundImage: `url(${ProfileImage})` }}
            ></div>
            <div className="absolute top-[440PX] left-[240px] md:top-[420px] md:left-[200px] lg:top-[420px] lg:left-[200px]">
              <ProfilePicture onFileSelect={handleProfileSelect} />
            </div>
          </div>
        </section>

        <section className="w-full gap-10 lg:gap-20 flex flex-col">
          <div className=" w-full">
            {/* NOMBRE DEL USUARIO */}
            {infoPersonalData.map((inputs, index) => (
              <div className="text-2xl lg:flex-none lg:mr-80 items-center flex flex-col mt-32 lg:mt-0 md:mt-0 md:ml-80 lg:ml-1" key={index}>
                <h1>
                  {" "}
                  {inputs.primerNombre} {inputs.primerApellido}{" "}
                </h1>
                <p className="text-lg">{inputs.profesion}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center items-center lg:justify-none lg:items-none md:flew-row lg:flex-row gap-6 w-full pb-8 h-auto">
            <div className="w-2/3">
              <div className="flex flex-col gap-4 w-full pb-8 h-auto">
                {/* ACERCA DE */}
                {infoPersonalData.map((inputs, index) => (
                  <div
                    className="flex w-full md:w-auto rounded-md p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p className="flex flex-wrap"> {inputs.acercaDe} </p>
                  </div>
                ))}

                {/* EXPERIENCIA LABORAL */}
                {infoProfesionalData.map((experience, index) => (
                  <div
                    className="flex flex-col p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p>Empresa | {experience.Empresa}</p>
                    <p>Cargo | {experience.Cargo}</p>
                    <p>Ciudad | {experience.Ciudad}</p>
                    <p>Fecha Inicio | {experience.Fecha_Inicio}</p>
                    <p>Fecha Fin | {experience.Fecha_Fin}</p>
                  </div>
                ))}

                {/* CERTIFICADOS */}
                {infoCertificacionData.map((experience, index) => (
                  <div
                    className="flex flex-col p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p>Titulo | {experience.Titulo}</p>
                    <p>Nombre de Institucion |{experience.Nom_Inst}</p>
                    <p>Ciudad |{experience.Ciudad}</p>
                    <p>Fecha Inicio |{experience.Fecha_Inicio}</p>
                    <p>Fecha Fin |{experience.Fecha_Fin}</p>
                  </div>
                ))}

                {/* EDUCACION */}
                {infoEducacionData.map((education, index) => (
                  <div
                    className=" flex flex-col p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p>Titulo | {education.Titulo}</p>
                    <p>Nombre del Centro Academico | {education.Nom_Inst}</p>
                    <p>Ciudad | {education.Ciudad}</p>
                    <p>Fecha Inicio | {education.Fecha_Inicio}</p>
                    <p>Fecha Fin | {education.Fecha_Fin}</p>
                  </div>
                ))}

                {/* HABILIDADES */}
                {infoHabilidadesData.map((skill, index) => (
                  <div
                    className="flex flex-col p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p>Habilidad | {skill.habilidad}</p>
                    <p>Proficiencia | {skill.proficiencia}</p>
                  </div>
                ))}

                {/* IDIOMAS */}
                {infoIdiomasData.map((language, index) => (
                  <div
                    className=" flex flex-col p-4 mr-4 ml-4 h-auto"
                    key={index}
                  >
                    <p>Idioma | {language.idioma}</p>
                    <p>Fluidez | {language.fluidez}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/3">
              <div className=" mt-10 lg:mt-0 h-auto items-center flex justify-center">
                DISEÑOS
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
    </div>
    
  );
}
