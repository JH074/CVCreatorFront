import React, { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

// Lazy-loaded Template components
const Template1 = lazy(() => import("../Templates/Template1"));
const Template2 = lazy(() => import("../Templates/Template2"));
const Template3 = lazy(() => import("../Templates/Template3"));
const Template4 = lazy(() => import("../Templates/Template4"));
const Template5 = lazy(() => import("../Templates/Template5"));
const Template6 = lazy(() => import("../Templates/Template6"));

export default function VistaPrevia() {
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setImage(sessionStorage.getItem("imgName"));
    setColor(sessionStorage.getItem("imgColor"));
  }, []);

  const navigate = useNavigate();

  const handleGuardar = () => {


    navigate("/Perfil");
  };



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
    <div className="flex flex-col gap-6 h-screen">
      <div className="flex-row flex items-center justify-center absolute top-0 right-0 p-2 m-2 w-screen">
        <div
          onClick={handleOpenModal}
          className="absolute w-[12%] md:w-[6%] lg:w-[4%] cursor-pointer right-0 top-2 p-2 m-2 md:mr-5 lg:mr-12"
        >
          <img src="/img/home.png" alt="home" />
        </div>
      </div>

      <div className="flex flex-row flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          {/* Dynamically rendered template component */}
          {image === "Template1" && <Template1 />}
          {image === "Template2" && <Template2 />}
          {image === "Template3" && <Template3 />}
          {image === "Template4" && <Template4 />}
          {image === "Template5" && <Template5 />}
          {image === "Template6" && <Template6 />}
        </Suspense>

        <div className="flex items-center ml-auto"> 
          <button
            className="text-sm lg:text-base md:text-base m-6 bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-8 py-2 rounded-[10px]"
            onClick={handleGuardar}
            type="button"
          >
            GUARDAR
          </button>
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
