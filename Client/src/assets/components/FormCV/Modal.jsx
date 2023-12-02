import React from "react";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="bg-[#34D1BF] p-8 md:px-20 lg:px-20 rounded-md z-10 justify-center items-center flex flex-col">
            <p className="mb-4 text-base">
              ¿Seguro que desea regresar al inicio?
            </p>
            <p className="text-sm">No se guardarán los cambios</p>
            <div className="flex space-x-4 mt-8">
              <button
                className="text-sm lg:text-base md:text-base bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-8 py-2 rounded-[10px]"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="text-sm lg:text-base md:text-base bg-[#0496FF] shadow-md  hover:bg-[#0459FF] text-[#EFEFEF] px-8 py-2 rounded-[10px]"
                onClick={onConfirm}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;