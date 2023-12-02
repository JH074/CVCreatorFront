// ModalDesign.jsx

import React from 'react';

const ModalDesign = ({ isOpen, onClose, onConfirm, onStarClick }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-[#0459FF] p-8 md:px-20 lg:px-20 rounded-md z-10 justify-center items-center flex flex-col">
            <div className="w-full h-full bg-[#EFEFEF] rounded-full flex items-center justify-center">
              <div className="star-container flex space-x-2">
                {[1, 2, 3, 4, 5].map((starNumber) => (
                  <div
                    key={starNumber}
                    className="cursor-pointer text-yellow-400 text-3xl hover:brightness-110 group"
                    onClick={() => onStarClick(starNumber)}
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalDesign;
