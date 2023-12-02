import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Modal from "./Modal";

import { useAuthContext} from "../../hooks/useAuthContext";
import {createCV} from "../Services/cv.services";


export default function InfoPersonal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useAuthContext();
  const token = user.token;

  const iconA = <img src="/img/usuario.png" alt="Icon A" />;
  const iconB = <img src="/img/maletin.png" alt="Icon B" />;
  const iconC = <img src="/img/gorro-de-graduacion.png" alt="Icon C" />;
  const iconD = <img src="/img/idioma.png" alt="Icon D" />;
  const iconE = <img src="/img/calidad.png" alt="Icon E" />;
  const iconF = <img src="/img/habilidades.png" alt="Icon F" />;

  const [inputs, setInputs] = useState({
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    CorreoElectronico: "",
    profesion: "",
    numeroTelefonico: "",
    acercaDe: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSave = () => {

    // const formData = {
    //   FirstName: inputs.primerNombre,
    //   SecondName: inputs.segundoNombre,
    //   Surname1: inputs.primerApellido,
    //   Email: inputs.CorreoElectronico,
    //   Job: inputs.profesion,
    //   Phone: inputs.numerTelefonico,
    //   Description: inputs.aceraDe
    // }

    // createCV(formData, token);

    const storedData = JSON.parse(localStorage.getItem("personalData")) || [];
    storedData.push(inputs);
    localStorage.setItem("personalData", JSON.stringify(storedData));
    console.log("Informacion Personal:", storedData);
    navigate("/InfoProfesional");
  };
  window.addEventListener("beforeunload", () => {
    localStorage.clear();
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="flex">

      <Sidebar
        icon={iconA}
        icon1={iconB}
        icon2={iconC}
        icon3={iconD}
        icon4={iconE}
        icon5={iconF}
      />

      <div className="flex flex-col justify-center items-center w-auto md:w-auto lg:w-4/5">
        
        <div className="border-b-4 border-[#006BA6] flex-row flex items-center justify-center p-2 lg:m-2 lg:w-full">
          <h2 className="m-4 ml-14 md:ml-12 lg:m-5 text-center text-xl md:text-3xl lg:text-4xl text-black font-bold">
            INFORMACIÓN PERSONAL
          </h2>
          <div
            onClick={handleOpenModal}
            className="w-[12%] md:w-[8%] lg:w-[5%] cursor-pointer justify-center items-center p-2 m-2"
          >
            <img src="/img/home.png" alt="home" />
          </div>
        </div>

        <div className="items-center m-2 md:m-28 lg:flex-1 lg:m-32">
          <form className="info-personal justify-center items-center rounded-md text-white bg-[#006BA6] flex flex-col gap-4 mt-12 px-2 py-4 md:px-12 lg:py-8 lg:px-24 w-auto h-auto">
            <div className="grid grid-cols-2 gap-6 w-full md:p-0 lg:p-0 p-6">
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Primer Nombre:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="primerNombre"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Segundo Nombre:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="segundoNombre"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Apellidos:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="primerApellido"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Correo Electronico:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="segundoApellido"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Profesión:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="profesion"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-base lg:text-xl md:text-base">
                  Numero telefónico:{" "}
                </label>
                <input
                  className="w-full p-2 border-white border-2 bg-transparent outline-none"
                  name="numeroTelefonico"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full md:p-0 lg:p-0 pl-6 pr-6">
              <label className="block text-base lg:text-xl md:text-base">
                Acerca de:{" "}
              </label>
              <textarea
                className="w-full p-2 h-[95px] border-white border-2 bg-transparent outline-none"
                name="acercaDe"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="text-sm lg:text-base md:text-base m-6 bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-10 py-2 rounded-[10px]"
                type="button"
                onClick={handleSave}
              >
                SIGUIENTE
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleHome}
      />
    </div>
  );
}
