
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import Home from "./assets/components/Home/Home";
import InfoPersonal from "./assets/components/FormCV/InfoPersonal";
import InfoProfesional from "./assets/components/FormCV/InfoProfesional";
import InfoEducacion from "./assets/components/FormCV/InfoEducacion";
import InfoCertificacion from "./assets/components/FormCV/InfoCertificacion";
import InfoIdiomas from "./assets/components/FormCV/InfoIdiomas";
import InfoHabilidades from "./assets/components/FormCV/InfoHabilidades";
import VistaPrevia from "./assets/components/FormCV/VistaPrevia";
import SignUp from "./assets/components/SignUp/SignUp";
import Login from "./assets/components/Login/Login";
import Perfil from "./assets/components/Perfil/Perfil";
import DesignsGrid from "./assets/components/Designs/DesignsGrid";
import ImageViewer from "./assets/components/Designs/ImgViewer";
import ChooseDesign from "./assets/components/FormCV/ChooseDesign";
import Personalizar from "./assets/components/FormCV/Personalizar";
import Header from "./assets/components/Header/Header";
import CountryDetails from "./assets/components/Header/CountryDetails";
import Reviews from "./assets/components/Reviews/Reviews";
import Template4 from "./assets/components/Templates/Template4";
import Template5 from "./assets/components/Templates/Template5";
import Template6 from "./assets/components/Templates/Template6";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/InfoPersonal" element={<InfoPersonal />} />
      <Route path="/InfoProfesional" element={<InfoProfesional />} />
      <Route path="/InfoEducacion" element={<InfoEducacion />} />
      <Route path="/InfoIdiomas" element={<InfoIdiomas />} />
      <Route path="/InfoCertificacion" element={<InfoCertificacion />} />
      <Route path="/InfoHabilidades" element={<InfoHabilidades />} />
      <Route path="/VistaPrevia" element={<VistaPrevia />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/DesignsGrid" element={<DesignsGrid />} />
      <Route path="/image/:imageName" element={<ImageViewer />} />
      <Route path="/ChooseDesign" element={<ChooseDesign />} />
      <Route path="/Personalizar" element={<Personalizar />} />
      <Route path="/country/:country" element={<CountryDetails />} />
      <Route path="/Reviews" element={<Reviews/>}/>
      <Route path="/Template6" element={<Template6/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;