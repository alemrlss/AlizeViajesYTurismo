import { Footer } from "../pages/Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";


export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Modal />
      <Footer />
    </div>
  )
}
