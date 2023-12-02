import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Modal from "./Modal";

export default function InfoIdiomas() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [languages, setLanguages] = useState([
    {
      idioma: "",
      fluidez: "",
    },
  ]);
  const [message, setMessage] = useState(" ");

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index][name] = value;
      return newLanguages;
    });
  };

  const handleAddLanguage = () => {
    setLanguages((prevLanguages) => [
      ...prevLanguages,
      {
        idioma: "",
        fluidez: "",
      },
    ]);
    setMessage("Idioma agregado");
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  const navigate = useNavigate();
  const iconA = <img src="/img/usuario.png" alt="Icon A" />;
  const iconB = <img src="/img/maletin.png" alt="Icon B" />;
  const iconC = <img src="/img/gorro-de-graduacion.png" alt="Icon C" />;
  const iconD = <img src="/img/idioma.png" alt="Icon D" />;
  const iconE = <img src="/img/calidad.png" alt="Icon E" />;
  const iconF = <img src="/img/habilidades.png" alt="Icon F" />;

  const handleSave = () => {
    const storedData = JSON.parse(localStorage.getItem("langData")) || [];
    storedData.push(...languages);
    localStorage.setItem("langData", JSON.stringify(storedData));
    console.log("Informacion Idioma:", storedData);
    navigate("/");
    navigate("/InfoCertificacion");
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

      <div className="flex flex-col justify-center items-center w-auto md:w-screen lg:w-4/5">
        <div className="border-b-4 border-[#006BA6] flex-row flex items-center justify-center p-2 md:w-full lg:m-2 lg:w-full">
          <h2 className="m-4 ml-14 md:ml-12 lg:m-5 text-center text-xl md:text-3xl lg:text-4xl text-black font-bold">
            IDIOMAS
          </h2>
          <div
            onClick={handleOpenModal}
            className="w-[12%] md:w-[8%] lg:w-[5%] cursor-pointer justify-center items-center p-2 m-2"
          >
            <img src="/img/home.png" alt="home" />
          </div>
        </div>

        <div className="items-center m-2 md:m-28 lg:flex-1 lg:m-32">
          {languages.map(
            (language, index) =>
              index === languages.length - 1 && (
                <form
                  className="info-idiomas justify-center items-center rounded-md text-white bg-[#006BA6] flex flex-col md:gap-4 gap-0 lg:gap-4 mt-12 py-4 md:px-12 lg:py-8 lg:px-24 w-auto h-auto"
                  key={index}
                >
                  <div className="md:p-0 lg:p-0 p-6 w-full gap-2 flex flex-col ">
                    <label className="block text-base lg:text-xl md:text-xl">
                      Idioma:{" "}
                    </label>
                    <input
                      className="w-full p-2 border-white border-2 bg-transparent outline-none"
                      name="idioma"
                      value={language.idioma}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                    <label className="block text-base lg:text-xl md:text-xl">
                      Fluidez:{" "}
                    </label>
                    <input
                      className="w-full p-2 border-white border-2 bg-transparent outline-none"
                      name="fluidez"
                      value={language.fluidez}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-row items-center justify-center m-4 gap-2">
                      <button
                        className="text-sm lg:text-base md:text-base m-2 bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-4 md:px-10 lg:px-10 py-2 rounded-[10px]"
                        type="button"
                        onClick={handleSave}
                      >
                        SIGUIENTE
                      </button>

                      <button
                        className="text-sm lg:text-base md:text-base m-2 bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-4 md:px-10 lg:px-10 py-2 rounded-[10px]"
                        type="button"
                        onClick={handleAddLanguage}
                      >
                        Agregar otro idioma
                      </button>
                    </div>
                    <div>
                      {message && (
                        <p className="text-sm lg:text-lg md:text-lg text-white">
                          {message}
                        </p>
                      )}
                    </div>
                  </div>
                </form>
              )
          )}
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
