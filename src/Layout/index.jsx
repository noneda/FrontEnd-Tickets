import { Outlet } from "react-router-dom";

import Header from "./Header";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="pb-20 px-10 w-full h-auto flex flex-col justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
