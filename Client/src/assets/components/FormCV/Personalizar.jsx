import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Personalizar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryColor, setCategoryColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "/img/gorro-de-graduacion.png"
  );
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



const handleImageChange = (newImage) => {
  const imageName = (newImage ?? "").split("/").pop().split(".")[0];
  const coreName = imageName.replace(/Nobg$/, ''); // Remove "Nobg" from the end of the string
  sessionStorage.setItem("imgName", coreName);
  setSelectedImage(newImage);
};

const handleImage = () => {
  sessionStorage.setItem("imgColor", categoryColor);

  const imageName = (selectedImage ?? "").split("/").pop().split(".")[0];
  const coreName = imageName.replace(/Nobg$/, ''); // Remove "Nobg" from the end of the string
  
  sessionStorage.setItem("imgName", coreName);
  navigate("/InfoPersonal");
};

  const handleHome = () => {
    navigate("/");
  };

  return (
    <article className="flex">
      
        <div
          onClick={handleHome}
          className="absolute w-[12%] md:w-[6%] lg:w-[4%] cursor-pointer right-0 top-2 p-2 m-2 md:mr-5 lg:mr-12"
        >
          <img src="/img/home.png" alt="home" />
        </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden absolute top-6 md:top-9 left-2 md:left-6 z-50"
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
      </button>

      <section
        className={`${
          menuOpen ? "translate-x-0 shadow-black/40 shadow-[0_0_30px_11px_rgba(0,0,0,0)] lg:shadow-none md:shadow-black/40 md:shadow-[0_0_30px_11px_rgba(0,0,0,0)]" : "-translate-x-full lg:w-1/5"
        } lg:translate-x-0 md:fixed lg:relative fixed top-0 left-0 h-screen bg-[#006BA6] w-1/2 lg:w-1/5 justify-center items-center flex`}
      >
        <ul className="grid grid-cols-2">
          <li>
            <img 
              onClick={() => handleImageChange("/img/Template1Nobg.png")}
              src="/img/Template1.png"
              alt="Template1"
              className=" w-36  h-48 p-2 "
            />
          </li>
          <li>
            <img
              onClick={() => handleImageChange("/img/Template2Nobg.png")}
              src="/img/Template2.png"
              alt="Template2"
              className=" w-36  h-48 p-2 "
            />
          </li>
          <li>
            <img
              onClick={() => handleImageChange("/img/Template3Nobg.png")}
              src="/img/Template3.png"
              alt="Template3"
              className=" w-36  h-48 p-2 "
            />
          </li>
          <li>
            <img
              onClick={() => handleImageChange("/img/Template4Nobg.png")}
              src="/img/Template4.png"
              alt="Template4"
              className=" w-36  h-48 p-2 "
            />
          </li>
          <li>
            <img
              onClick={() => handleImageChange("/img/Template5Nobg.png")}
              src="/img/Template5.png"
              alt="Template5"
              className=" w-36  h-48 p-2 "
            />
          </li>
          <li>
            <img
              onClick={() => handleImageChange("/img/Template6Nobg.png")}
              src="/img/Template6.png"
              alt="Template6"
              className=" w-36  h-48 p-2 "
            />
          </li>
        </ul>
      </section>

      <section className="w-full h-screen md:h-screen lg:w-4/5 justify-center items-center flex flex-col">
        <div className="flex flex-row gap-3 mb-8">
          <div
            onClick={() => handleCircleClick("#000000")}
            className="bg-black rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#FFFFFF")}
            className="bg-white rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#837B8C")}
            className="bg-[#837B8C] rounded-full md:w-10 md:h-10 w-7 h-7"          
            ></div>
          <div
            onClick={() => handleCircleClick("#373BEA")}
            className="bg-[#373BEA] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#E8671F")}
            className="bg-[#E8671F] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#26A21B")}
            className="bg-[#26A21B] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#C7417B")}
            className="bg-[#C7417B] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#E50000")}
            className="bg-[#E50000] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
          <div
            onClick={() => handleCircleClick("#BAE8E8")}
            className="bg-[#BAE8E8] rounded-full md:w-10 md:h-10 w-7 h-7"
          ></div>
        </div>

        <div className=" p-4 w-96 h-86">
          <ul className="">
          <li onClick={handleImage}>
          <ImgNavigate to={`/image/${selectedImage}`} src={selectedImage} />
        </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
