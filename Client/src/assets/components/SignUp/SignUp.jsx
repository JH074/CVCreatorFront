import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import {createProfile, getProfiles} from "../Services/profile.services";
import { useAuthContext} from "../../hooks/useAuthContext";

export default function SignUp() {
  const navigate = useNavigate();
  const {user} = useAuthContext();

  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    email: "",
    contra: "",
    confcontra: "",
  });

  const {signup, error, isLoading} = useSignup()

  const countries = [
    { label: "El Salvador", value: "El Salvador" },
    { label: "Estados Unidos", value: "Estados Unidos" },
    { label: "Panama", value: "Panama" },
    { label: "Costa Rica", value: "Costa Rica" },
    { label: "España", value: "España" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      //sirve para concatenar las cosas
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const formData = {
      "email": inputs.email,
      "FirstName": inputs.nombre,
      "Surname": inputs.apellido,
    }

    try{
      if(!formData){
        return;
      }
      const user = await signup(inputs.email, inputs.contra);
      createProfile(formData,await user.token);

      navigate("/");

    } catch(err){
      console.log(await err)
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <article
      className="flex items-center justify-center h-screen lg:bg-cover lg:bg-no-repeat md:bg-cover md:bg-no-repeat"
      style={{ backgroundImage: "url(/img/blobAqua.svg)" }}
    >
      {/* div central */}
      <div className="relative gap-20 w-[80%] h-[90%] lg:w-[1600px] lg:h-[900px] md:w-[80%] md:h-[90%] flex items-center justify-center rounded shadow-[0_0_40px_8px_rgba(0,0,0,0)] shadow-[#34D1BF]/25 bg-[#EFEFEF]">
        {/* para regresar */}
        <div
          onClick={handleBack}
          className="absolute cursor-pointer left-0 top-0 p-3 m-1 lg:p-8 lg:m-2"
        >
          <img src="/img/flechaIzquierda.png" alt="back" />
        </div>
        {/* div de imagen */}
        <div className="hidden lg:block lg:w-[40%] lg:h-[70%] md:hidden">
          <img src="/img/steps.png" alt="singUpSteps" />
        </div>
        {/* parte de form */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-3xl mt-6 lg:text-5xl md:text-4xl mb-16 ">
              {" "}
              ¡CREA TU CUENTA!
            </h1>
            <form className="sign-up flex flex-col w-[70%] lg:w-[100%] md:w-[95%]">
              <label className="block text-base lg:text-xl md:text-xl">
                Nombre{" "}
              </label>{" "}
              <br />
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="nombre"
                onChange={handleInputChange}
              />
              <label className="block text-base lg:text-xl md:text-xl">
                Apellido{" "}
              </label>{" "}
              <br />
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="apellido"
                onChange={handleInputChange}
              />
              <div className="flex flex-row items-center gap-4">
                <label className="block text-base lg:text-xl md:text-xl">
                  Pais
                </label>{" "}
                <br />
                <select
                  className="p-2 w-auto lg:w-full md:w-full rounded border-2 border-zinc-300"
                  name="pais"
                  onChange={handleInputChange}
                >
                  {countries.map((option, index) => (
                    <option className="p-2" value={option.value} key={index}>
                      {" "}
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <br />
              <label className="block text-base lg:text-xl md:text-xl">
                Correo Electronico{" "}
              </label>{" "}
              <br />
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="email"
                onChange={handleInputChange}
              />
              <label className="block text-base lg:text-xl md:text-xl">
                Contraseña{" "}
              </label>{" "}
              <br />
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="contra"
                onChange={handleInputChange}
              />
              <label className="block text-base lg:text-xl md:text-xl">
                Confirmar Contraseña{" "}
              </label>{" "}
              <br />
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="confcontra"
                onChange={handleInputChange}
              />
            </form>
          </div>
          <button
            className="mx-36 text-sm lg:text-base md:text-base m-6 bg-[#34D1BF] shadow-md shadow-[#34D1BF]/50 hover:bg-[#34D1BF] text-[#EFEFEF] px-8 py-2 rounded-[10px]"
            type="button"
            disabled={isLoading}
            onClick={handleSave}
          >
            CREAR CUENTA
          </button>
          <div className="flex flex-row gap-4 justify-center align-center text-sm lg:text-base md:text-base">
            <p> ¿Ya tienes cuenta?</p>
            <p onClick={handleLogin}
              className="font-bold text-[#34D1BF] hover:cursor-pointer">
              {" "}
              Iniciar Sesion
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
