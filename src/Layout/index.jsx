import { Outlet } from "react-router-dom";

import Header from "./Header";
import NavBar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <main className="py-20 px-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
