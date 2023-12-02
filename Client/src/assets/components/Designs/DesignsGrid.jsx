import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export default function DesignsGrid() {
  
  const navigate = useNavigate();

  const ImgNavigate = ({ to, src }) => {
    const [showImage, setShowImage] = useState(false);

    return (
      <div>
        <NavLink to={to} onClick={() => setShowImage(true)}>
          <img src={src} className=" w-80 h-auto" alt="design" />
        </NavLink>
        {showImage && <ImageViewer src={src} onClose={() => setShowImage(false)} />}
      </div>
    );
  };
  return (
    <article>
    <div className="flex items-center justify-center p-4 h-auto pt-20 pb-20">
        <ul className="grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 w-[40%] md:w-[50%] lg:w-[50%]">
          <li>
            <ImgNavigate to="/image/Template1" src="img/Template1.png" />
          </li>
          <li>
          <ImgNavigate to="/image/Template2" src="img/Template2.png" />
          </li>
          <li>
          <ImgNavigate to="/image/Template3" src="img/Template3.png" />
          </li>
          <li>
          <ImgNavigate to="/image/Template4" src="img/Template4.png" />
          </li>
          <li>
          <ImgNavigate to="/image/Template5" src="img/Template5.png" />
          </li>
          <li>
          <ImgNavigate to="/image/Template6" src="img/Template6.png" />
          </li>
        </ul>
        </div>

    </article>
  );
}