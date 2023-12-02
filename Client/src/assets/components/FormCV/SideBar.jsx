// Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ icon, icon1, icon2, icon3, icon4, icon5 }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  /* const handleIconClick = (path) => {
    navigate(path);
  }; */

  /* const handlePersonalizar = () => {
    navigate("/Personalizar");
  }; */

  const handleIconClick = (path) => {
    navigate(path);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const handlePersonalizar = () => {
    navigate("/Personalizar");
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:w-1/5">
      <div
        className="lg:hidden cursor-pointer absolute top-6 md:top-9 left-2 md:left-6 z-50"
        onClick={handleToggleMenu}
      >
        <svg
          className="h-8 w-8 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h24M4 16h24m-24 8h10"
          ></path>
        </svg>
      </div>

      <div
        className={`${
          isMenuOpen ? "translate-x-0 shadow-black/40 shadow-[0_0_30px_11px_rgba(0,0,0,0)] lg:shadow-none md:shadow-black/40 md:shadow-[0_0_30px_11px_rgba(0,0,0,0)]" : "-translate-x-full"
        } lg:translate-x-0 fixed top-0 left-0 h-screen bg-[#006BA6] w-1/2 lg:w-1/5 justify-center items-center`}
      >
        <div className="flex flex-col gap-12 h-screen justify-center items-center">
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoPersonal")}
          >
            {icon} Información personal
          </div>
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoProfesional")}
          >
            {icon1} Experiencia laboral
          </div>
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoEducacion")}
          >
            {icon2}Educación
          </div>
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoIdiomas")}
          >
            {icon3}Idiomas
          </div>
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoCertificacion")}
          >
            {icon4} Certificados
          </div>
          <div
            className="flex flex-row justify-center items-center gap-4 h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 text-white text-sm md:text-lg lg:text-lg text-center"
            onClick={() => handleIconClick("/InfoHabilidades")}
          >
            {icon5}Habilidades
          </div>

          <button
            className="text-xs lg:text-base md:text-base m-6 bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-8 py-4 md:py-2 rounded-[10px]"
            onClick={handlePersonalizar}
            type="button"
          >
            PERSONALIZAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
