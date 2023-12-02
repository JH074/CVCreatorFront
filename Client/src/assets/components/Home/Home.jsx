
import Reviews from "../Review/Reviews";
import DesignsGrid from "../Designs/DesignsGrid";


export default function Home() {
  return (
    <section>
      <section className="flex flex-row p-10 m-8 gap-16">
        <div className="w-1/2 flex flex-col justify-center align-center">
          <h1 className="text-black text-[64px] font-medium">
            <strong>¡Crea tu perfil y haz tu currículum con nosotros!</strong>
          </h1>
          <br />
          <p className="w-[444px] text-black text-xl font-normal">
            Crear un currículum puede ser confuso y complicado, puede tomar
            bastante tiempo si se hace desde 0, con nosotros solo te encargas de
            colocar tu información y estará ¡listo!
          </p>
          <br />
          <button className="w-64 text-[#EFEFEF] bg-[#0496FF] py-4 px-2 rounded-[10px] justify-center items-center hover:bg-blue-700">
    
            {" "}
            Empezar
          </button>
        </div>
        <div className="w-1/2">
          <img src="/img/cvInicio.png" alt="cv img" />
        </div>
      </section>
      <section className="w-auto h-screen bg-[#006BA6]">
        <div className="flex items-center justify-center h-screen">

        <section className="w-auto h-screen bg-[#006BA6]">
        <div className="flex items-center justify-center h-screen">
          <div className="w-[100%]">
            <DesignsGrid />
          </div>
        </div>
      </section>
        
        </div>
      </section>
      <section className="w-full h-96 bg-[#EFEFEF]">
        <div className="flex h-96 items-center justify-center">
        <Reviews/>
        </div>
      </section>
      <section>
        <div className="bg-[#006BA6] flex flex-row">
          <div className="p-4 w-1/2 flex flex-col items-center justify-center">
            <form className="flex flex-col items-center m-4">
              <label className="text-[#EFEFEF]">
                Nombre:
                <br />
                <input
                  className="text-black focus:outline-blue-700 rounded-[10px] w-96 h-14 p-2"
                  type="text"
                />
              </label>
              <label className="text-[#EFEFEF] m-4">
                Correo electrónico:
                <br />
                <input
                  className="text-black focus:outline-blue-700 rounded-[10px] w-96 h-14 p-2"
                  type="email"
                />
              </label>

              <label className="text-[#EFEFEF]">
                Comentario: <br />
                <textarea
                  className="resize-none text-black focus:outline-blue-700 rounded-[10px] w-96 h-36 p-2"
                  type="text"
                />
              </label>
              <input
                className=" bg-[#0496FF] hover:bg-blue-700 text-[#EFEFEF] px-10 py-2 m-6 rounded-[10px]"
                type="submit"
              />
            </form>
          </div>
          <div className="text-[#EFEFEF] p-4 w-1/2 flex flex-col items-center justify-center">
            <h5 className="text-4xl	m-4">¡CONTACTANOS!</h5>
            <p className="text-xl">
              Deja tu comentario, tu correo y te responderemos, lo más pronto
              posible
            </p>
            <div className="w-3/6">
              <img src="/img/contatc.png" alt="contact-us" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 m-8 gap-16 h-16">
        <div>
            <ul className="flex flex-row place-content-end gap-4">
                <li> <img src="/img/discord.png" alt="discord" /></li>
                <li><img src="/img/facebook.png" alt="facebook" /></li>
                <li><img src="/img/instagram.png" alt="instagram" /></li>
            </ul>
        </div>
      </section>
    </section>
  );
}
