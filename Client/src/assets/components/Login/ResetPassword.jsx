export default function ResetPassword() {
  return (
    <article className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="z-10 absolute inset-x-0 top-0 w-full max-w-screen h-[25%] md:h-[30%] lg:h-[35%] p-8 bg-[#0496FF] text-[#EFEFEF] rounded-b-3xl items-center justify-center flex">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl"> ¡No la olvides!</h1>
      </div>
      <div className="relative z-0 mt-[1%] md:mt-[14%] lg:mt-[14%] flex flex-col items-center justify-center">
        <p className="md:w-[500px] lg:w-[630px] m-12 text-center text-black md:text-[20px] lg:text-[22px]">
          {" "}
          Ingresa tu correo electronico con el cual creaste la cuenta, recibiras
          un correo con un link para reestablecer la contraseña
        </p>
        <form className="flex flex-col w-[75%]">
          <label className="md:text-[20px] lg:text-[22px]"> Nueva contraseña </label>
          <br />
          <input
            className="mb-8 w-full border-b border-black focus:outline-none bg-transparent"
            name="new_pass"
          />
          <label className="md:text-[20px] lg:text-[22px]"> Confirmar nueva contraseña </label>
          <br />
          <input
            className="mb-8 w-full border-b border-black focus:outline-none bg-transparent"
            name="confirm_new_pass"
          />
        </form>
        <button
          className="flex items-center justify-center text-sm md:text-base bg-[#0496FF] shadow-md shadow-black/25 hover:bg-[#0459FF] text-[#EFEFEF] px-10 py-3 w-fill lg:w-80 rounded-[10px]"
          type="submit"
        >
          {" "}
          Reestablecer contraseña{" "}
        </button>
      </div>
    </article>
  );
}
