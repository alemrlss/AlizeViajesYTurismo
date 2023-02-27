import { useState } from "react";

import { Login } from "../Login/Login";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { SideMenu } from "./SideMenu";
import { Favorites } from "../Favorites/Favorites";

export const Layout = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
 
  const [isFavorite, setIsFavorite] = useState(false);
 

  return (
    <>
      <Header setIsOpenMenu={setIsOpenMenu} setShowLogin={setShowLogin} setIsFavorite={setIsFavorite} />
      <SideMenu setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      {children}
      {/* <Login showLogin={showLogin} setShowLogin={setShowLogin} /> */}
      {/* <Favorites isFavorite={isFavorite} setIsFavorite={setIsFavorite} /> */}
      <Footer />
    </>
  );
};
