import { SectionNav } from "../../../Utils/NavBar";

const NavBarMobile = () => {
  return (
    <>
      <input
        id="menu-toggle"
        type="checkbox"
        className="hidden peer/buttonNav"
      />

      <label
        htmlFor="menu-toggle"
        className="fixed xl:hidden z-25 top-[2.5%] right-0 w-auto flex items-center bg-white rounded-l-2xl shadow-lg"
      >
        <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
          <div className="w-[50%] h-[2px] bg-black rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked/buttonNav:rotate-[-45deg]"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-center peer-checked/buttonNav:hidden"></div>
          <div className="w-[50%] h-[2px] bg-black rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked/buttonNav:rotate-[45deg]"></div>
        </div>
      </label>
      <section className="scrollbar-hidden hidden peer-checked/buttonNav:flex fixed overflow-auto flex-col  z-20 w-full h-full bg-[#fff] top-0 left-0">
        <div className="flex flex-row justify-between items-center">
          <div className="flex item-center justify-start-self items-center gap-3 w-5/6 py-4 px-2">
            <img
              src="https://www.cota-cundinamarca.gov.co/SiteAssets/V3/assets/img/escudo-municipio.png"
              className="w-[3rem] sm:w-[5rem]"
              alt="logo"
            />
            <h2 className="text-[1.1rem] font-normal text-left lg:text-start">
              Alcaldía Municipal de <span className="font-bold">Cota</span>,
              <br /> Cundinamarca
            </h2>
          </div>
        </div>
        <ul className="w-full h-auto flex flex-col *:px-10 *:py-2 *:hover:bg-[#8c2226] *:hover:text-[#fff] *:hover:font-bold">
          {SectionNav.map((father, index) =>
            father.children === undefined ? (
              <li key={"father-" + index}>
                <a href={father.ulr}>{father.name}</a>
              </li>
            ) : (
              <li key={"has-father-" + index} className="group/father w-full">
                <div className="flex flex-row justify-baseline items-center gap-20">
                  <section>{father.name}</section>
                  <i className="self-start py-2 fa-solid fa-chevron-down transform group-hover/father:rotate-180 duration-500 group-hover/father:text-white  " />
                </div>
                <ul className="hidden group-hover/father:flex flex-col justify-center items-baseline *:px-10 *:py-2 *:font-normal *:hover:bg-[#fff] *:hover:text-[#8c2226] *:hover:font-bold w-full *:w-full">
                  {father.children.map((son, i) =>
                    son.children === undefined ? (
                      <li key={"son-" + i}>{son.name}</li>
                    ) : (
                      <li key={"has-son-" + i} className="group/son">
                        <div className="flex flex-row justify-baseline items-center gap-20">
                          <section>{son.name}</section>
                          <i className="self-start py-2 fa-solid fa-chevron-down transform group-hover/son:rotate-180 duration-500 group-hover/son:text-[#8c2226]" />
                        </div>
                        <ul className="hidden group-hover/son:flex flex-col justify-center items-baseline *:px-10 *:py-2 *:font-normal *:hover:bg-[#8c2226] *:hover:text-[#fff] *:hover:font-bold w-full *:w-full">
                          {son.children.map((e, n) =>
                            e.children === undefined ? (
                              <li key={"grandson-" + n}>{e.name}</li>
                            ) : (
                              <li
                                key={"has-grandson-" + n}
                                className="group/grandson"
                              >
                                <div className="flex flex-row justify-baseline items-center gap-20">
                                  <section>{e.name}</section>
                                  <i className="self-start py-2 fa-solid fa-chevron-down transform group-hover/grandson:rotate-180 duration-500 group-grandson/son:text-[#fff]" />
                                </div>
                                <ul className="hidden group-hover/grandson:flex flex-col justify-center items-baseline *:px-10 *:py-2 *:font-normal *:hover:bg-[#fff] *:hover:text-[#8c2226] *:hover:font-bold w-full *:w-full">
                                  {e.children.map((_, d) => (
                                    <li key={"more-grandson-" + d}>{_.name}</li>
                                  ))}
                                </ul>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default NavBarMobile;
