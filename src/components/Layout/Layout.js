import { useState } from "react";

// import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { SideMenu } from "./SideMenu";

import { Button } from '@chakra-ui/react';
import { RiWhatsappLine } from "react-icons/ri";

export const Layout = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);


  return (
    <>

      <Button className="btn__wpp" position="fixed" zIndex="10" bottom="20px" right="20px" onClick={() => window.open("https://api.whatsapp.com/send?phone=543794077764&text=¡Bienvenido Pasajero!. ¿¡En que podemos ayudarte!?")} height="65px" borderRadius="30px" colorScheme='whatsapp'>
        <RiWhatsappLine size={32} />
      </Button>
      <Header setIsOpenMenu={setIsOpenMenu} setShowLogin={setShowLogin} setIsFavorite={setIsFavorite} />
      <SideMenu setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      {children}

      <Footer />
    </>
  );
};


