import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext} from "../../hooks/useAuthContext";

const CountryDropdown = ({ onSelectCountry }) => {
  const countries = ["El Salvador", "Australia", "Alemania"];
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };
  return (
    <div className="inline-block text-left items-center flex items-center flex">

      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center md:w-80 lg:w-80 rounded-md border border-[#EFEFEF] shadow-sm px-4 py-2 bg-[#006BA6] text-sm font-medium text-[#EFEFEF] hover:bg-[#0496FF]"
        >
          Buscar
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 10.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4zM10 18a8 8 0 100-16 8 8 0 000 16z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showDropdown && (
        <div className="origin-top-right absolute z-50 mt-36 md:mt-40 md:w-80 lg:mt-40 lg:w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => {
                  onSelectCountry(country);
                  toggleDropdown();
                }}
                className="block w-full text-left lg:px-4 px-5 py-2 text-xs lg:text-sm text-black hover:bg-gray-100 hover:text-gray-900"
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mostrarHeader, setMostrarHeader] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const {user} = useAuthContext();

  // Lista de rutas en las que no se mostrará el header
  const rutasSinHeader = [
    "/ChooseDesign",
    "/InfoPersonal",
    "/image/usuario",
    "/InfoProfesional",
    "/InfoEducacion",
    "/InfoIdiomas",
    "/InfoCertificacion",
    "/InfoHabilidades",
    "/VistaPrevia",
    "/Personalizar",
  ];

  // Lógica para ocultar el header en las rutas deseadas
  useEffect(() => {
    if (rutasSinHeader.includes(location.pathname)) {
      setMostrarHeader(false);
    } else {
      setMostrarHeader(true);
    }
  }, [location.pathname]);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    // Navigate to another component based on the selected country
    navigate(`/country/${country}`);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <div className="rootlayout">
        {mostrarHeader && (
          <div className="flex flex-row items-center mr-4 mt-4 lg:m-8">
            <NavLink
              to="/"
              className="flex flex-row items-center gap-4 py-3 px-6 mr-auto"
            >
              <img className="w-14" src="/img/logo.png" alt="logo" />
              <h5 className="text-2xl lg:block hidden">YourCVCreator</h5>
            </NavLink>

            <div className="mr-24 md:mr-32">
              <CountryDropdown onSelectCountry={handleSelectCountry} />
            </div>

            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#006BA6] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>

              {menuVisible && (
                <div className="absolute p-2 top-0 right-0 mr-4 mt-24 w-36 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 items-center justify-center flex">
                  <div className="py-1">
                    <NavLink
                      to={user === null ? "/login" : "/ChooseDesign"}
                      className="block px-4 text-center py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
                    >
                      Crear CV
                    </NavLink>
                    <NavLink
                      className="block text-center px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
                      to={user === null ? "/login" : "/DesignsGrid"}
                    >
                      {" "}
                      Diseños
                    </NavLink>
                    <NavLink
                      className=" block text-center text-[#EFEFEF] m-1 bg-[#0496FF] py-3 px-8 rounded-[10px] hover:bg-blue-700"
                      to={user === null ? "/login" : "/Perfil"}
                    >
                      {" "}
                      Perfil
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            {/* Fin Menú hamburguesa */}
            <div className="hidden">
              <CountryDropdown onSelectCountry={handleSelectCountry} />
            </div>

            <nav className="flex flex-row gap-4 ml-auto hidden lg:flex">
              <NavLink className="py-3 px-6" to={user === null ? "/login" : "/ChooseDesign"}>
                Crear CV
              </NavLink>
              <NavLink className="py-3 px-6" to={user === null ? "/login" : "/DesignsGrid"}>
                Diseños
              </NavLink>
              <NavLink
                className="text-[#EFEFEF] bg-[#0496FF] py-3 px-8 rounded-[10px] hover:bg-blue-700"
                to={user === null ? "/login" : "/Perfil"}
              >
                Perfil
              </NavLink>
            </nav>
          </div>
        )}

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </header>
  );
}
