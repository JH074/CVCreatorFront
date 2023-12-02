import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();

  const {login, error, isLoading} = useLogin()

  const [inputs, setInputs] = useState({
    correo: "",
    contra: "",
  });

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
    
    try{

      await login(inputs.correo, inputs.contra);
      navigate("/");

    } catch(err){
      console.log(await err)
    }

  };

  const handleSingUp = () => {
    navigate("/SignUp");
  };

  const handleForgotPass = () => {
    navigate("/ForgotPassword");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <article className="flex items-center justify-center h-screen lg:bg-cover lg:bg-no-repeat md:bg-cover md:bg-no-repeat" style={{ backgroundImage: 'url(/img/blob.svg)' }}>
      {/* div central */}
      <div className="relative gap-20 w-[80%] h-[90%] lg:w-[1600px] lg:h-[900px] md:w-[80%] md:h-[90%] flex items-center justify-center rounded shadow-[0_0_40px_8px_rgba(0,0,0,0)] shadow-[#0459FF]/25 bg-[#EFEFEF]">
        {/* para regresar */}
        <div
          onClick={handleBack}
          className="absolute cursor-pointer left-0 top-0 p-8 m-2"
        >
          <img src="/img/flechaIzquierda.png" alt="back" />
        </div>
        {/* div de imagen */}
        <div className="hidden lg:block lg:w-[40%] lg:h-[70%] md:hidden">
          <img src="/img/cvProfile.png" alt="cvperson" />
        </div>
        {/* parte de form */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center"> 
            <h1 className="text-center text-3xl lg:text-5xl md:text-4xl mb-16 "> ¡BIENVENIDO! </h1>
            <form className="login flex flex-col w-[70%] lg:w-[100%] md:w-[95%]">
              <label className="block text-base lg:text-xl md:text-xl">Correo </label>
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="correo"
                onChange={handleInputChange}
              />
              <label className="block text-base lg:text-xl md:text-xl">Contraseña </label>
              <input
                className="mb-4 w-auto lg:w-full md:w-full border-b border-black focus:outline-none bg-transparent"
                name="contra"
                onChange={handleInputChange}
              />
            </form>
          </div>
          <br />
          <div className="flex text-sm lg:text-base md:text-base flex-row gap-2 justify-center align-center">
            <p> ¿Has olvidado tu contraseña?</p>
            <p
              className="font-bold text-[#0459FF] hover:cursor-pointer"
              onClick={handleForgotPass}
            >
              {" "}
              Click aquí
            </p>
          </div>
          <button
            className="mx-36 text-sm lg:text-base md:text-base m-6 bg-[#0496FF] shadow-md shadow-[#0459FF]/50 hover:bg-[#0459FF] text-[#EFEFEF] px-8 py-2 rounded-[10px]"
            type="button"
            onClick={handleSave}
          >
            Ingresar
          </button>
          <div className="flex flex-row gap-4 justify-center align-center text-sm lg:text-base md:text-base">
            <p> ¿Aun no tienes cuenta? </p>
            <p
              onClick={handleSingUp}
              className="font-bold text-[#0459FF] hover:cursor-pointer"
            >
              {" "}
              Registrarse
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
