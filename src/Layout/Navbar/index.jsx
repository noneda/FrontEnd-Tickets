import NavBarDesktop from "./Desktop";
import NavBarMobile from "./Mobile";

const LayoutNavBar = () => {
  return (
    <nav>
      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
};

export default LayoutNavBar;
