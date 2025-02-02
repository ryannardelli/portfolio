import { Header } from "./components/Header";
import { HeroPrinciple } from "./components/HeroPrinciple";
export default function Home() {
  return (
    <>
      <Header
        link_one="Home"
        link_two="Sobre"
        link_three="Serviços"
        link_four="Portólio"
        link_five="Contato"
      />
      <HeroPrinciple />
    </>
  );
}
