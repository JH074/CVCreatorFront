import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function ChooseDesign() {
  const [categoryColor, setCategoryColor] = useState("");
  const navigate = useNavigate();

  const ImgNavigate = ({ to, src }) => {
    const [showImage, setShowImage] = useState(false);

    return (
      <div>
        <NavLink to={to} onClick={() => setShowImage(true)}>
          <img
            src={src}
            className="w-full h-auto"
            alt="design"
            style={{ backgroundColor: categoryColor }}
          />
        </NavLink>
        {showImage && (
          <ImageViewer src={src} onClose={() => setShowImage(false)} />
        )}
      </div>
    );
  };

  const handleCircleClick = (color) => {
    setCategoryColor(color);
  };

  const handleImage = (imageName) => {
    sessionStorage.setItem("imgColor", categoryColor);
    sessionStorage.setItem("imgName", imageName);
    navigate("/InfoPersonal");
  };
  

  const handleBack = () => {
    navigate("/Perfil");
  };
  

  return (
    <article className="flex flex-col justify-center items-center h-screen lg:h-auto w-auto gap-10 md:h-auto md:mt-16 md:mb-16 lg:mt-20">
      <div
          onClick={handleBack}
          className="absolute w-[12%] lg:w-[4%] md:w-[6%] cursor-pointer right-0 top-0 p-2 m-2 mt-8 lg:mt-4 mr-4 md:mt-4 md:mr-6 lg:mr-12"
        >
          <img src="/img/home.png" alt="home" />
        </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl lg:m-4">
          {" "}
          Escoge un diseño predeterminado{" "}
        </h1>
        <div className="lg:w-screen flex flex-row justify-center items-center gap-3 ">
          <div
            onClick={() => handleCircleClick("#000000")}
            className="bg-black rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#FFFFFF")}
            className="bg-white rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#837B8C")}
            className="bg-[#837B8C] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#373BEA")}
            className="bg-[#373BEA] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#E8671F")}
            className="bg-[#E8671F] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#26A21B")}
            className="bg-[#26A21B] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#C7417B")}
            className="bg-[#C7417B] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#E50000")}
            className="bg-[#E50000] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
          <div
            onClick={() => handleCircleClick("#BAE8E8")}
            className="bg-[#BAE8E8] rounded-full md:w-10 md:h-10 w-6 h-6 md:flex-shrink-0 flex-shrink"
          ></div>
        </div>
      </div>

      <div className="items-center justify-center flex">
        <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%] lg:w-[60%]">
          <li onClick={() => handleImage("Template1")}>
            <ImgNavigate to="/image/Template1Nobg" src="/img/Template1Nobg.png" />
          </li>
          <li onClick={() => handleImage("Template2")}>
            <ImgNavigate to="/image/Template2Nobg" src="/img/Template2Nobg.png" />
          </li>
          <li onClick={() => handleImage("Template3")}>
            <ImgNavigate to="/image/Template3Nobg" src="/img/Template3Nobg.png" />
          </li>
          <li onClick={() => handleImage("Template4")}>
            <ImgNavigate to="/image/Template4Nobg" src="/img/Template4Nobg.png"  />
          </li>
          <li onClick={() => handleImage("Template5")}>
            <ImgNavigate to="/image/Template5Nobg" src="/img/Template5Nobg.png" />
          </li>
          <li onClick={() => handleImage("Template6")}>
            <ImgNavigate to="/image/Template6Nobg" src="/img/Template6Nobg.png" />
          </li>
        </ul>
      </div>
    </article>
  );
}
