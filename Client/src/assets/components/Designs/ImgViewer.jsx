
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ModalDesign from './ModalDesign';

const ImageViewer = () => {
  const navigate = useNavigate();
  const { imageName } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const imageSrc = `/img/${imageName}.png`;

  const handleClickNavigate = () => {
    sessionStorage.setItem('imgName', imageName);
    navigate('/InfoPersonal');
  };

  const handleClickModal = () => {
    setModalOpen(true);
  };

  const handleStarClick = (starNumber) => {
    console.log('Image name:', imageName);
    console.log('Star number:', starNumber);
    setModalOpen(false);
    navigate('/');
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div>
        <img src={imageSrc} className="w-96 h-auto mb-4" alt="Selected Design" />
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="bg-[#0496FF] text-white px-4 py-2 rounded"
          onClick={handleClickNavigate}
        >
          OCUPAR
        </button>
        <button
          type="button"
          className="bg-[#0496FF] text-white px-4 py-2 rounded"
          onClick={handleClickModal}
        >
          CALIFICAR
        </button>
      </div>

      <ModalDesign isOpen={modalOpen} onClose={() => setModalOpen(false)} onConfirm={() => setModalOpen(false)} onStarClick={handleStarClick} />
    </section>
  );
};

export default ImageViewer;
