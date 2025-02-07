"use client";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { HeroPrinciple } from "./components/HeroPrinciple";
import { ServiceProfessional } from "./components/ServiceProfessional";
import { Contact } from "./components/Contact";
import { Project } from "./components/Project";
import { AlertSucces } from "./components/AlertSuccess";
import { useState } from "react";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <AlertSucces show={showAlert} />
      <Header
        link_one="Home"
        link_two="Sobre"
        link_three="Serviços"
        link_four="Portfólio"
        link_five="Contato"
      />
      <HeroPrinciple />
      <About />
      <ServiceProfessional />
      <Project />
      <Contact setShowAlert={setShowAlert} />
    </>
  );
}
