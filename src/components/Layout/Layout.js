import { useState } from "react";
import { Login } from "../../Views/Login";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { SideMenu } from "./SideMenu";

export const Layout = ({ children }) => {
 const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <Header setIsOpenMenu={setIsOpenMenu} />
      <SideMenu setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
      {children}
      
      <Footer />
    </>
  );
};
